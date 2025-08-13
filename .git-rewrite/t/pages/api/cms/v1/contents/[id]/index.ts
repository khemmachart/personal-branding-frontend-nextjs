import type { NextApiRequest, NextApiResponse } from "next";
import { GetContentByIdUseCase } from "libs/modules/cms/useCases/contents/getContentByIdUseCase";
import { UpdateContentUseCase } from "libs/modules/cms/useCases/contents/updateContentUseCase";
import { DeleteContentUseCase } from "libs/modules/cms/useCases/contents/deleteContentUseCase";
import { PgContentRepository } from "libs/modules/cms/repositories/contentRepository";
import { PgFileRepository } from "libs/modules/cms/repositories/fileRepository";
import { corsMiddleware } from "libs/middlewares/corsMiddleware";
import { errorHandlerMiddleware } from "libs/middlewares/errorHandlerMiddleware";
import connect from "next-connect";

export default connect({ onError: errorHandlerMiddleware })
  .use(corsMiddleware)
  .get(getContentByIdHandler)
  .put(updateContentHandler)
  .delete(deleteContentHandler)

async function getContentByIdHandler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Content ID is required' });
  }

  const contentRepository = new PgContentRepository();
      try {
          const getContentByIdUseCase = new GetContentByIdUseCase(contentRepository);
          const content = await getContentByIdUseCase.execute(id);
          if (!content) {
              return res.status(404).json({ error: 'Content not found' });
          }
          return res.status(200).json(content);
      } catch (error: any) {
          console.error(`Error fetching content ${id}:`, error);
          return res.status(500).json({ error: 'Internal Server Error', details: error.message });
      }
  }

async function updateContentHandler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    if (!id || typeof id !== 'string') {
        return res.status(400).json({ error: 'Content ID is required' });
    }

    const contentRepository = new PgContentRepository();
    const fileRepository = new PgFileRepository();
    try {
        const updateContentUseCase = new UpdateContentUseCase(contentRepository, fileRepository);
        const updatedContent = await updateContentUseCase.execute(id, req.body);
        return res.status(200).json(updatedContent);
    } catch (error: any) {
        console.error(`Error updating content ${id}:`, error);
        return res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
  }

async function deleteContentHandler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    if (!id || typeof id !== 'string') {
        return res.status(400).json({ error: 'Content ID is required' });
    }

    const contentRepository = new PgContentRepository();
    try {
        const deleteContentUseCase = new DeleteContentUseCase(contentRepository);
        await deleteContentUseCase.execute(id);
        return res.status(204).end();
    } catch (error: any) {
        console.error(`Error deleting content ${id}:`, error);
        return res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
  }