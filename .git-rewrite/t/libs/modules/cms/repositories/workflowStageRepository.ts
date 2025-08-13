import { query } from "libs/database";
import { v4 as uuidv4 } from 'uuid';
import { WorkflowStage, WorkflowStageStatus } from "components/ContentList"

export interface WorkflowStageRepository {
    getAllWorkflowStageStatuses(): Promise<WorkflowStageStatus[]>;
    getWorkflowStageStatusById(id: string): Promise<WorkflowStageStatus | null>;
    getAllWorkflowStages(): Promise<WorkflowStage[]>;
    getWorkflowStageById(id: string): Promise<WorkflowStage | null>;
}

export class PgWorkflowStageRepository implements WorkflowStageRepository {
  
  async getWorkflowStageById(id: string): Promise<WorkflowStage | null> {
    const sql = `SELECT * FROM workflow_stages WHERE id = $1`;
    const { rows } = await query(sql, [id]);
    return rows.length > 0 ? rows[0] : null;
  }

  async getAllWorkflowStages(): Promise<WorkflowStage[]> {
    const sql = `SELECT * FROM workflow_stages ORDER BY created_date ASC`;
    const { rows } = await query(sql);
    return rows;
  }

  private buildWorkflowStageStatusSelectClause(
    additionalWhereClause: string[] = [],
    additionalOrderBy: string[] = []
  ) {
    const whereClause = additionalWhereClause?.length > 0 ? `WHERE ${additionalWhereClause.join(' AND ')}` : '';
    const orderByClause = additionalOrderBy?.length > 0 ? `ORDER BY ${additionalOrderBy.join(', ')}` : 'ORDER BY ws.sort ASC';

    const sql = `
      SELECT 
        ws.code,
        ws.title,
        ws.description,
        JSON_AGG(
          JSON_BUILD_OBJECT(
            'id', wss.id,
            'code', wss.code,
            'title', wss.title,
            'description', wss.description
          ) ORDER BY wss.procedure ASC
        ) as statuses
      FROM workflow_stages ws
      LEFT JOIN workflow_stage_statuses wss ON ws.id = wss.workflow_stage_id
      ${whereClause}
      GROUP BY ws.id, ws.code, ws.title, ws.description
      ${orderByClause}
    `;
    return sql;
  }

  async getWorkflowStageStatusById(id: string): Promise<WorkflowStageStatus | null> {
    const sql = this.buildWorkflowStageStatusSelectClause(['wss.id = $1']);
    const { rows } = await query(sql, [id]);
    return rows.length > 0 ? rows[0] : null;
  }

  async getAllWorkflowStageStatuses(): Promise<WorkflowStageStatus[]> {
    const sql = this.buildWorkflowStageStatusSelectClause();
    const { rows } = await query(sql);
    return rows;
  }
}
