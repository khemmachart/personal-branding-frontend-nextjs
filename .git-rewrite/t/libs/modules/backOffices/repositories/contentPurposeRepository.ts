import { query } from "libs/database";
import { ContentPurpose } from "components/ContentList";

export interface ContentPurposeRepository {
  getContentPurposes(): Promise<ContentPurpose[]>;
  getContentPurposeById(id: string): Promise<ContentPurpose | null>;
}

export class PgContentPurposeRepository implements ContentPurposeRepository {
  
  async getContentPurposes(): Promise<ContentPurpose[]> {
    const sqlStatement = this.buildGetAllContentPurposesSqlStatement();
    const { rows } = await query(sqlStatement);
    return rows;
  }

  async getContentPurposeById(id: string): Promise<ContentPurpose | null> {
    try {
      const sqlStatement = this.buildGetContentPurposeByIdSqlStatement();
      const result = await query(sqlStatement, [id]);
      return result.rows[0] || null;
    } catch (error) {
      throw error;
    }
  }

  private buildGetAllContentPurposesSqlStatement(): string {
    return this.buildBaseContentPurposeSqlStatement() + ' ORDER BY "sort" ASC';
  }

  private buildGetContentPurposeByIdSqlStatement(): string {
    return this.buildBaseContentPurposeSqlStatement() + ' WHERE id = $1';
  }

  private buildBaseContentPurposeSqlStatement(): string {
    return `
      SELECT
        id,
        code,
        title,
        description,
        content_examples AS "contentExamples",
        created_date AS createdDate,
        updated_date AS updatedDate,
        sort AS sort
      FROM content_purposes
    `;
  }
}
