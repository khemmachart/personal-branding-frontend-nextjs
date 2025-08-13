import { query } from "libs/database";
import { v4 as uuidv4 } from 'uuid';
import { S3Client, PutObjectCommand, DeleteObjectCommand, CopyObjectCommand } from '@aws-sdk/client-s3';

export interface FileRecord {
  id: string;
  file_name: string;
  file_name_disk: string;
  file_extension: string;
  file_url: string;
  file_size: number;
  file_thumbnail_url: string;
  mime_type: string;
  image_original_url: string;
  image_webp_url: string;
  created_date: string;
  updated_date: string;
}

export interface FileRepository {
  createFileRecord(fileData: Omit<FileRecord, 'id' | 'created_date' | 'updated_date'>): Promise<FileRecord>;
  uploadFileToS3(thumbnailKey: string, thumbnailResult: any, originalImageKey: string, originalResult: any, webpImageKey: string, webpResult: any): Promise<void>;
  moveBulkFilesToArchiveFolder(originalKeys: string[]): Promise<void>;
  moveFileToArchiveFolder(originalKey: string): Promise<void>;
  deleteBulkFileRecords(fileIds: string[]): Promise<void>;

  // Migrate file thumbnail url
  getFilesToMigrate(): Promise<any[]>;
  updateFileUrl(fileId: string, fileUrl: string): Promise<void>;
  updateFileImageOriginalUrl(fileId: string, fileImageOriginalUrl: string): Promise<void>;
  updateFileWebpUrl(fileId: string, fileWebpUrl: string): Promise<void>;
}

export class PgFileRepository implements FileRepository {
  
  async createFileRecord(fileData: Omit<FileRecord, 'id' | 'created_date' | 'updated_date'>): Promise<FileRecord> {
    const uuid = uuidv4();
    const sql = `
      INSERT INTO files (
        id, file_name, file_name_disk, file_url, file_size, mime_type, file_thumbnail_url, image_original_url, image_webp_url, file_extension, created_date, updated_date
      ) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      RETURNING *
    `;
    const { rows } = await query(sql, [
      uuid, 
      fileData.file_name, 
      fileData.file_name_disk, 
      fileData.file_url, 
      fileData.file_size, 
      fileData.mime_type,
      fileData.file_thumbnail_url, 
      fileData.image_original_url, 
      fileData.image_webp_url,
      fileData.file_extension,
      new Date().toISOString(),
      new Date().toISOString()
    ]);
    return rows[0];
  }

  async deleteBulkFileRecords(fileIds: string[]): Promise<void> {
    if (fileIds.length === 0) return;
    const placeholders = fileIds.map((_, idx) => `$${idx + 1}`).join(', ');
    const sql = this.buildDeleteBulkFileRecordsSqlStatement(placeholders);
    await query(sql, [...fileIds]);
  }

  async uploadFileToS3(
    thumbnailKey: string, 
    thumbnailResult: any, 
    originalImageKey: string, 
    originalResult: any, 
    webpImageKey: string, 
    webpResult: any
  ): Promise<void> {
      const s3 = new S3Client({
          region: process.env.AWS_REGION!,
          credentials: {
              accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
              secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
          },
      });

      const thumbnailCommand = new PutObjectCommand({
          Bucket: process.env.AWS_S3_BUCKET_NAME!,
          Key: thumbnailKey,
          ContentType: thumbnailResult.mimeType,
          Body: thumbnailResult.optimizedBuffer,
      });

      const originalCommand = new PutObjectCommand({
          Bucket: process.env.AWS_S3_BUCKET_NAME!,
          Key: originalImageKey,
          ContentType: originalResult.mimeType,
          Body: originalResult.optimizedBuffer,
      });

      const webpCommand = new PutObjectCommand({
          Bucket: process.env.AWS_S3_BUCKET_NAME!,
          Key: webpImageKey,
          ContentType: webpResult.mimeType,
          Body: webpResult.optimizedBuffer,
      });

      await Promise.all([
          s3.send(thumbnailCommand),
          s3.send(originalCommand),
          s3.send(webpCommand)
      ]);
  }

  async moveBulkFilesToArchiveFolder(originalKeys: string[]): Promise<void> {
    return Promise.all(originalKeys.map(originalKey => this.moveFileToArchiveFolder(originalKey))) as unknown as void;
  }

  /**
   * Move an object in S3 to a new key (simulate move by copy + delete).
   * 
   * @param originalKey - The current S3 key (e.g., "uploads/image.webp")
   */
  async moveFileToArchiveFolder(originalKey: string): Promise<void> {
    const sourceBucket = process.env.AWS_S3_BUCKET_NAME;
    const destinationBucket = process.env.AWS_S3_BUCKET_NAME_ARCHIVED;

    if (!sourceBucket) {
      throw new Error('AWS_S3_BUCKET_NAME environment variable is not set');
    }
    
    if (!destinationBucket) {
      throw new Error('AWS_S3_BUCKET_NAME_ARCHIVED environment variable is not set');
    }

    const s3 = new S3Client({
      region: process.env.AWS_REGION!,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      },
    });

    const newKey = `${originalKey.split("/").pop()}`; // Keep filename, change folder

    const copyCommand = new CopyObjectCommand({
      Bucket: destinationBucket,
      CopySource: encodeURIComponent(`${sourceBucket}/${originalKey}`),
      Key: newKey,
    });

    const deleteCommand = new DeleteObjectCommand({
      Bucket: sourceBucket,
      Key: originalKey,
    });

    await s3.send(copyCommand);
    await s3.send(deleteCommand);
  }

  async getFilesToMigrate(): Promise<any[]> {
    const sqlStatement = this.buildGetFilesToMigrateSqlStatement();
    const { rows } = await query(sqlStatement);
    return rows;
  }

  async updateFileUrl(fileId: string, fileUrl: string): Promise<void> {
    const sqlStatement = this.buildUpdateFileUrlSqlStatement();
    await query(sqlStatement, [fileUrl, fileId]);
  }

  async updateFileImageOriginalUrl(fileId: string, fileImageOriginalUrl: string): Promise<void> {
    const sqlStatement = this.buildUpdateFileImageOriginalUrlSqlStatement();
    await query(sqlStatement, [fileImageOriginalUrl, fileId]);
  }

  async updateFileWebpUrl(fileId: string, fileWebpUrl: string): Promise<void> {
    const sqlStatement = this.buildUpdateFileWebpUrlSqlStatement();
    await query(sqlStatement, [fileWebpUrl, fileId]);
  }

  private buildGetFilesToMigrateSqlStatement() {
    return `
      SELECT id, file_url, image_original_url, image_webp_url FROM files
    `;
  }

  private buildUpdateFileUrlSqlStatement() {
    return `
      UPDATE files SET file_url = $1, updated_date = NOW() WHERE id = $2
    `;
  }

  private buildUpdateFileImageOriginalUrlSqlStatement() {
    return `
      UPDATE files SET image_original_url = $1, updated_date = NOW() WHERE id = $2
    `;
  }

  private buildUpdateFileWebpUrlSqlStatement() {
    return `
      UPDATE files SET image_webp_url = $1, updated_date = NOW() WHERE id = $2
    `;
  }

  private buildDeleteBulkFileRecordsSqlStatement(placeholders: string) {
    return `
      DELETE FROM files 
      WHERE id IN (${placeholders})
    `;
  }
}
