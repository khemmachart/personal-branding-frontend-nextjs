import { query } from "libs/database";
import { v4 as uuidv4 } from 'uuid';
import { Content, ContentImage, WorkflowStageStatus } from "components/ContentList";

export interface ContentRepository {
  getAllContents(): Promise<Content[]>;
  getContentById(id: string): Promise<any>;
  getContentsByWorkflowStageStatusCodes(workflowStageStatusCodes: string[]): Promise<any[]>;
  updateContent(id: string, content: Content): Promise<any>;
  updateContentImages(contentImages: ContentImage[]): Promise<any>;
  deleteContentImages(contentImageIds: string[]): Promise<any[]>
  createContent(content: Content): Promise<Content>;
  createContentStatusHistory(contentId: string, fromStatus: WorkflowStageStatus, toStatus: WorkflowStageStatus): Promise<any>;
  getContentStatusHistory(contentId: string): Promise<any>;
  deleteContent(id: string): Promise<void>;
}

export class PgContentRepository implements ContentRepository {
  
  async getAllContents(): Promise<Content[]> {
    const sqlStatement = this.buildGetAllContentsSqlStatement();
    const { rows } = await query(sqlStatement);
    return rows;
  }

  async getContentById(id: string) {
    try {
      const sqlStatement = this.buildGetContentByIdSqlStatement();
      const result = await query(sqlStatement, [id]);
      return result.rows[0] || null;
    } catch (error) {
      throw error;
    }
  }

  async getContentsByWorkflowStageStatusCodes(workflowStageStatusCodes: string[]) {
    try {
      const placeholders = workflowStageStatusCodes.map((_, index) => `$${index + 1}`).join(',');
      const sqlStatement = this.buildGetContentsByWorkflowStageStatusCodesSqlStatement(placeholders);
      const result = await query(sqlStatement, [...workflowStageStatusCodes]);
      return result.rows;
    } catch (error) {
      throw error;
    }
  }

  async updateContent(id: string, content: Content) {
    try {
      const { name, title, description, short_form_content_text, status } = content;
      const sqlStatement = this.buildUpdateContentSqlStatement();
      const workflowStageStatusId = status?.id || null;
      
      // Ensure all parameters are properly defined, convert undefined to null
      const params = [
        id,
        name ?? null,
        title ?? null,
        description ?? null,
        short_form_content_text ?? null,
        workflowStageStatusId
      ];
      
      const result = await query(sqlStatement, params);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async updateContentImages(contentImages: ContentImage[]): Promise<any> {
    if (contentImages.length === 0) {
      return [];
    }

    const sqlStatement = this.buildCreateContentImageSqlStatement();
    const results = [];
    
    // Use Promise.all for concurrent execution instead of sequential
    const promises = contentImages.map(async (image) => {
      const queryParams = [uuidv4(), image.content_id, image.file.id];
      const result = await query(sqlStatement, queryParams);
      return result.rows[0];
    });

    const resolvedResults = await Promise.all(promises);
    results.push(...resolvedResults);
    
    return results;
  }

  async deleteContentImages(contentImageIds: string[]): Promise<any[]> {
    if (contentImageIds.length === 0) return [];
    const placeholders = contentImageIds.map((_, idx) => `$${idx + 1}`).join(', ');
    const sqlStatement = this.buildDeleteContentImageSqlStatement(placeholders);
    const result = await query(sqlStatement, [...contentImageIds]);
    return result.rows;
  }

  async createContent(content: Content): Promise<Content> {
    const uuid = uuidv4();
    const sql = this.buildCreateContentSqlStatement();
    
    // Ensure all parameters are properly defined, convert undefined to null
    const params = [
      uuid,
      content.name ?? null,
      content.title ?? null,
      content.description ?? null,
      content.short_form_content_text ?? null,
      content.status?.id ?? null
    ];
    
    const { rows } = await query(sql, params);
    return rows[0];
  }

  async createContentStatusHistory(contentId: string, fromStatus: WorkflowStageStatus, toStatus: WorkflowStageStatus): Promise<any> {
    const uuid = uuidv4();
    const sqlStatement = this.buildCreateContentStatusHistorySqlStatement();
    const result = await query(sqlStatement, [uuid, contentId, fromStatus.id, toStatus.id]);
    return result.rows[0];
  }

  async deleteContent(id: string): Promise<void> {
    try {
      const sqlStatement = this.buildDeleteContentSqlStatement();
      await query(sqlStatement, [id]);
    } catch (error) {
      throw error;
    }
  }

  async getContentStatusHistory(contentId: string): Promise<any> {
    const sqlStatement = this.buildGetContentStatusHistorySqlStatement();
    const result = await query(sqlStatement, [contentId]);
    return result.rows[0];
  }

  private buildContentSelectClause(
    additionalWhereClause: string[] = [],
    additionalOrderBy: string[] = []
  ) {
    const defaultWhereClause = 'WHERE c.deleted_date IS NULL';
    const defaultOrderBy = 'ORDER BY c.created_date ASC';

    const whereClause = additionalWhereClause?.length > 0 ? `${defaultWhereClause} AND ${additionalWhereClause.join(' AND ')}` : defaultWhereClause;
    const orderByClause = additionalOrderBy?.length > 0 ? `${defaultOrderBy} ${additionalOrderBy.length > 0 ? ',' : ''} ${additionalOrderBy.join(', ')}` : defaultOrderBy;

    return `
      SELECT 
        c.*,
        COALESCE(
          JSON_AGG(
            JSON_BUILD_OBJECT(
              'id', ci.id,
              'content_id', ci.content_id,
              'file', JSON_BUILD_OBJECT(
                'id', f.id,
                'file_name', f.file_name,
                'file_name_disk', f.file_name_disk,
                'file_extension', f.file_extension,
                'mime_type', f.mime_type,
                'file_size', f.file_size,
                'file_url', f.file_url,
                'file_thumbnail_url', f.file_thumbnail_url,
                'image_original_url', f.image_original_url,
                'image_webp_url', f.image_webp_url,
                'created_date', f.created_date
              )
            ) ORDER BY f.created_date
          ) FILTER (WHERE f.id IS NOT NULL), 
          '[]'::json
        ) as images,
        COALESCE(
          JSON_BUILD_OBJECT(
            'id', wss.id,
            'code', wss.code,
            'title', wss.title,
            'description', wss.description,
            'workflow_stage', JSON_BUILD_OBJECT(
              'id', ws.id,
              'code', ws.code,
              'title', ws.title,
              'description', ws.description
            )
          ),
          '{}'::json
        ) as status
      FROM contents c
      LEFT JOIN content_images ci ON c.id = ci.content_id
      LEFT JOIN files f ON ci.file_id = f.id
      LEFT JOIN workflow_stage_statuses wss ON c.workflow_stage_status_id = wss.id
      LEFT JOIN workflow_stages ws ON wss.workflow_stage_id = ws.id
      ${whereClause}
      GROUP BY c.id, wss.id, wss.code, wss.title, wss.description, wss.workflow_stage_id, ws.id, ws.code, ws.title, ws.description
      ${orderByClause}
    `;
  }

  /**
   * Builds a SQL statement to get contents by one or more workflow stage status codes.
   * Accepts placeholders for the IN clause to match multiple status codes.
   */
  private buildGetContentsByWorkflowStageStatusCodesSqlStatement(placeholders: string) {
    return this.buildContentSelectClause([`wss.code IN (${placeholders})`], []);
  }
  
  private buildGetAllContentsSqlStatement() {
    return this.buildContentSelectClause(null, ['c.created_date ASC']);
  }

  private buildGetContentByIdSqlStatement() {
    return this.buildContentSelectClause(['c.id = $1'], ['c.created_date ASC'])
  }

  private buildCreateContentSqlStatement() {
    return `
      INSERT INTO contents (id, name, title, description, short_form_content_text, workflow_stage_status_id, created_date, updated_date) 
      VALUES ($1, $2, $3, $4, $5, $6, NOW(), NULL) 
      RETURNING *
    `;
  }

  private buildCreateContentImageSqlStatement() {
    return `
      INSERT INTO content_images (id, content_id, file_id, created_date, updated_date)
      VALUES ($1, $2, $3, NOW(), NULL)
      RETURNING *`;
  }

  private buildUpdateContentSqlStatement() {
    return `
      UPDATE contents
      SET name = $2, title = $3, description = $4, short_form_content_text = $5, workflow_stage_status_id = $6, updated_date = NOW()
      WHERE id = $1
      RETURNING *`;
  }

  private buildDeleteContentImageSqlStatement(placeholders: string) {
    return `
      DELETE FROM content_images
      WHERE id IN (${placeholders})`;
  }

  private buildDeleteContentSqlStatement() {
    return `
      UPDATE contents
      SET deleted_date = NOW()
      WHERE id = $1`;
  }

  private buildCreateContentStatusHistorySqlStatement() {
    return `
      INSERT INTO content_status_histories (id, content_id, workflow_stage_status_from_id, workflow_stage_status_to_id, created_date, changed_date)
      VALUES ($1, $2, $3, $4, NOW(), NOW())
      RETURNING *`;
  }

  private buildGetContentStatusHistorySqlStatement() {
    return `
      SELECT workflow_stage_status_id FROM contents
      WHERE id = $1`
  }
} 