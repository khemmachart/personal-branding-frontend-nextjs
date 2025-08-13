import { query } from "libs/database";
import { ContentTheme } from "components/ContentList";

export interface ContentThemeRepository {
  getContentThemes(): Promise<ContentTheme[]>;
  getContentThemeById(id: string): Promise<ContentTheme | null>;
}

export class PgContentThemeRepository implements ContentThemeRepository {
  
  async getContentThemes(): Promise<ContentTheme[]> {
    const sqlStatement = this.buildGetAllContentThemesSqlStatement();
    const { rows } = await query(sqlStatement);
    return rows;
  }

  async getContentThemeById(id: string): Promise<ContentTheme | null> {
    try {
      const sqlStatement = this.buildGetContentThemeByIdSqlStatement();
      const result = await query(sqlStatement, [id]);
      return result.rows[0] || null;
    } catch (error) {
      throw error;
    }
  }

  private buildGetAllContentThemesSqlStatement(): string {
    return this.buildBaseContentThemeSqlStatement() + ' ORDER BY "sort" ASC';
  }

  private buildGetContentThemeByIdSqlStatement(): string {
    return this.buildBaseContentThemeSqlStatement() + ' WHERE id = $1';
  }

  private buildBaseContentThemeSqlStatement(): string {
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
      FROM content_themes
    `;
  }
}
