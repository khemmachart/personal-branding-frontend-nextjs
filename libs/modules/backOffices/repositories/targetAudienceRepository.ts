import { query } from "libs/database";
import { TargetAudience } from "components/ContentList";

export interface TargetAudienceRepository {
  getTargetAudiences(): Promise<TargetAudience[]>;
  getTargetAudienceById(id: string): Promise<TargetAudience | null>;
}

export class PgTargetAudienceRepository implements TargetAudienceRepository {
  
  async getTargetAudiences(): Promise<TargetAudience[]> {
    const sqlStatement = this.buildGetAllTargetAudiencesSqlStatement();
    const { rows } = await query(sqlStatement);
    return rows;
  }

  async getTargetAudienceById(id: string): Promise<TargetAudience | null> {
    try {
      const sqlStatement = this.buildGetTargetAudienceByIdSqlStatement();
      const result = await query(sqlStatement, [id]);
      return result.rows[0] || null;
    } catch (error) {
      throw error;
    }
  }

  private buildGetAllTargetAudiencesSqlStatement(): string {
    return this.buildBaseTargetAudienceSqlStatement() + ' ORDER BY "sort" ASC';
  }

  private buildGetTargetAudienceByIdSqlStatement(): string {
    return this.buildBaseTargetAudienceSqlStatement() + ' WHERE id = $1';
  }

  private buildBaseTargetAudienceSqlStatement(): string {
    return `
      SELECT
        id,
        code,
        title,
        description,
        content_examples AS "contentExamples",
        content_purposes AS "contentPurposes",
        created_date AS createdDate,
        updated_date AS updatedDate,
        sort AS sort
      FROM target_audiences
    `;
  }
}
