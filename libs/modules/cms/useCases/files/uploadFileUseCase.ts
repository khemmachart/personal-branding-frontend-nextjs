import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';
import { 
    optimizeForThumbnail, 
    optimizeOriginal,
    optimizeForWeb 
} from '../../../../../utils/imageOptimization';
import { FileRepository } from 'libs/modules/cms/repositories/fileRepository';
import { FileRecord } from 'libs/modules/cms/repositories/fileRepository';

export interface UploadFileRequest {
    fileName: string;
    filePath: string;
    fileType: string;
    fileBuffer: string;
}

export interface UploadFileResponse {
    success: boolean;
    fileRecord: FileRecord;
    versions: {
        thumbnail: {
            url: string;
            key: string;
            mimeType: string;
            extension: string;
            size: number;
        };
        original: {
            url: string;
            key: string;
            mimeType: string;
            extension: string;
            size: number;
        };
        webp: {
            url: string;
            key: string;
            mimeType: string;
            extension: string;
            size: number;
        };
    };
    originalSize: number;
    optimizationInfo: {
        thumbnail: {
            compressionRatio: string;
            dimensions: string;
        };
        original: {
            compressionRatio: string;
            dimensions: string;
        };
        webp: {
            compressionRatio: string;
            dimensions: string;
        };
    };
}

export class UploadFileUseCase {
    private fileRepository: FileRepository;

    constructor(fileRepository: FileRepository) {
        this.fileRepository = fileRepository;
    }

    async execute(request: UploadFileRequest): Promise<UploadFileResponse> {
        // Validate environment variables
        this.validateEnvironmentVariables();

        // Validate request
        this.validateRequest(request);

        // Generate unique ID for this image set
        const imageId = uuidv4();
        const datetime = new Date().toISOString().replace(/[-:T.Z]/g, '').slice(0, 14);
        const extension = request.fileName.split('.').pop() || '';
        const file_name_disk = `${datetime}_${imageId}`;

        // Convert base64 to buffer with validation
        const originalBuffer = this.convertBase64ToBuffer(request.fileBuffer);

        // Generate optimized versions
        const [originalResult, thumbnailResult, webpResult] = await Promise.all([
            optimizeOriginal(originalBuffer, request.fileName),
            optimizeForThumbnail(originalBuffer, request.fileName),
            optimizeForWeb(originalBuffer, request.fileName),
        ]);

        // Define S3 keys for each version
        const thumbnailKey = `${request.filePath}/${file_name_disk}_thumbnail.${thumbnailResult.ext}`;
        const originalImageKey = `${request.filePath}/${file_name_disk}_original.${originalResult.ext}`;
        const webpImageKey = `${request.filePath}/${file_name_disk}_webp.${webpResult.ext}`;

        // Upload all versions to S3
        await this.fileRepository.uploadFileToS3(thumbnailKey, thumbnailResult, originalImageKey, originalResult, webpImageKey, webpResult);

        // Create file record in database
        const fileRecord = await this.fileRepository.createFileRecord({
            file_name: request.fileName,
            file_name_disk: file_name_disk,
            file_url: webpImageKey, // Use webp as primary URL
            file_size: originalBuffer.length,
            file_extension: extension,
            file_thumbnail_url: thumbnailKey,
            image_original_url: originalImageKey,
            image_webp_url: webpImageKey,
            mime_type: webpResult.mimeType,
        }) as FileRecord;

        return {
            success: true,
            fileRecord,
            versions: {
                thumbnail: {
                    url: `${process.env.AWS_CLOUDFRONT_DISTRIBUTION_DOMAIN}${thumbnailKey}`,
                    key: thumbnailKey,
                    mimeType: thumbnailResult.mimeType,
                    extension: thumbnailResult.ext,
                    size: thumbnailResult.optimizedBuffer.length
                },
                original: {
                    url: `${process.env.AWS_CLOUDFRONT_DISTRIBUTION_DOMAIN}${originalImageKey}`,
                    key: originalImageKey,
                    mimeType: originalResult.mimeType,
                    extension: originalResult.ext,
                    size: originalResult.optimizedBuffer.length
                },
                webp: {
                    url: `${process.env.AWS_CLOUDFRONT_DISTRIBUTION_DOMAIN}${webpImageKey}`,
                    key: webpImageKey,
                    mimeType: webpResult.mimeType,
                    extension: webpResult.ext,
                    size: webpResult.optimizedBuffer.length
                }
            },
            originalSize: originalBuffer.length,
            optimizationInfo: {
                thumbnail: {
                    compressionRatio: ((originalBuffer.length - thumbnailResult.optimizedBuffer.length) / originalBuffer.length * 100).toFixed(1) + '%',
                    dimensions: '300px width, 60% quality, WebP format'
                },
                original: {
                    compressionRatio: ((originalBuffer.length - originalResult.optimizedBuffer.length) / originalBuffer.length * 100).toFixed(1) + '%',
                    dimensions: '1920px width, 100% quality, Auto format'
                },
                webp: {
                    compressionRatio: ((originalBuffer.length - webpResult.optimizedBuffer.length) / originalBuffer.length * 100).toFixed(1) + '%',
                    dimensions: '1200px width, 70% quality, WebP format'
                }
            }
        };
    }

    private validateEnvironmentVariables(): void {
        const requiredEnvVars = {
            AWS_REGION: process.env.AWS_REGION,
            AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
            AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
            AWS_S3_BUCKET_NAME: process.env.AWS_S3_BUCKET_NAME,
            AWS_CLOUDFRONT_DISTRIBUTION_DOMAIN: process.env.AWS_CLOUDFRONT_DISTRIBUTION_DOMAIN,
        };

        const missingEnvVars = Object.entries(requiredEnvVars)
            .filter(([key, value]) => !value)
            .map(([key]) => key);

        if (missingEnvVars.length > 0) {
            throw new Error(`Missing required environment variables: ${missingEnvVars.join(', ')}`);
        }
    }

    private validateRequest(request: UploadFileRequest): void {
        if (!request.fileName || !request.fileType) {
            throw new Error('Missing fileName or fileType');
        }

        if (!request.fileBuffer) {
            throw new Error('Missing fileBuffer for optimization');
        }

        if (typeof request.fileBuffer !== 'string') {
            throw new Error('fileBuffer must be a base64 string');
        }

        const maxBase64Length = 10 * 1024 * 1024; // 10MB limit
        if (request.fileBuffer.length > maxBase64Length) {
            throw new Error(`File too large. Maximum size is 10MB. Received: ${(request.fileBuffer.length / 1024 / 1024).toFixed(2)}MB`);
        }
    }

    private convertBase64ToBuffer(fileBuffer: string): Buffer {
        try {
            const buffer = Buffer.from(fileBuffer, 'base64');
            
            if (buffer.length === 0) {
                throw new Error('Invalid base64 data: empty buffer');
            }

            return buffer;
        } catch (bufferError) {
            throw new Error(`Invalid base64 data. Please ensure the image is properly encoded. Details: ${bufferError instanceof Error ? bufferError.message : 'Unknown error'}`);
        }
    }
}
