import type { NextApiRequest, NextApiResponse } from "next"
import { corsMiddleware } from "libs/middlewares/corsMiddleware"
import { errorHandlerMiddleware } from "libs/middlewares/errorHandlerMiddleware"
import { GetAllContentsUseCase } from "libs/modules/cms/useCases/contents/getAllContentsUseCase"
import { PgContentRepository } from "libs/modules/cms/repositories/contentRepository"
import { CreateContentUseCase } from "libs/modules/cms/useCases/contents/createContentUseCase"
import connect from "next-connect"

// Default export to handle requests to the API route handler
export default connect({ onError: errorHandlerMiddleware })
  .use(corsMiddleware)
  .get(getAllContentsHandler)
  .post(createContentHandler)

async function getAllContentsHandler(req: NextApiRequest, res: NextApiResponse) {
  const contentRepository = new PgContentRepository();
  const getAllContentsUseCase = new GetAllContentsUseCase(contentRepository);
  const contents = await getAllContentsUseCase.execute({
    workflowStageStatusCodes: req.query.filterStatuses as string
  });
  return res.status(200).json(contents);
}

async function createContentHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const contentRepository = new PgContentRepository();
    const createContentUseCase = new CreateContentUseCase(contentRepository);
    const newContent = await createContentUseCase.execute(req.body);
    return res.status(201).json(newContent);
  } catch (error: any) {
    console.error('Error in POST /api/cms/v1/contents:', error);
    if (error.message.includes('required')) {
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
} 