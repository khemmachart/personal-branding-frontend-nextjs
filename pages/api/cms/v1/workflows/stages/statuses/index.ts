import { NextApiRequest, NextApiResponse } from "next";
import { errorHandlerMiddleware } from "libs/middlewares/errorHandlerMiddleware";
import { corsMiddleware } from "libs/middlewares/corsMiddleware";
import connect from 'next-connect';
import { GetAllWorkflowStageStatusesUseCase } from "libs/modules/cms/useCases/stages/getAllWorkflowStageStatuses";
import { PgWorkflowStageRepository } from "libs/modules/cms/repositories/workflowStageRepository";

export default connect({ onError: errorHandlerMiddleware })
  .use(corsMiddleware)
  .get(getAllWorkflowStageStatusesHandler)

async function getAllWorkflowStageStatusesHandler(req: NextApiRequest, res: NextApiResponse) {
  const workflowStageRepository = new PgWorkflowStageRepository();
  const getAllWorkflowStageStatusesUseCase = new GetAllWorkflowStageStatusesUseCase(workflowStageRepository);
  const workflowStageStatuses = await getAllWorkflowStageStatusesUseCase.execute();
  try {
    res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=86400'); // 1 day browser cache, 1 day CDN cache, 1 day stale while revalidate
    res.setHeader('ETag', `"${Date.now()}"`); // Simple ETag for cache validation
    res.status(200).json(workflowStageStatuses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get workflow stage statuses' });
  }
}