import type { NextApiRequest, NextApiResponse } from 'next';
import { errorHandlerMiddleware } from 'libs/middlewares/errorHandlerMiddleware';
import { corsMiddleware } from 'libs/middlewares/corsMiddleware';
import connect from 'next-connect';
import { UploadFileUseCase } from 'libs/modules/cms/useCases/files/uploadFileUseCase';
import { FileRepository, PgFileRepository } from 'libs/modules/cms/repositories/fileRepository';

export default connect({ onError: errorHandlerMiddleware })
  .use(corsMiddleware)
  .post(uploadImageHandler)

// Configure body parser for larger files
export const config = {
    api: {
        bodyParser: {
            sizeLimit: '10mb', // Increase size limit to 10MB
        },
    },
};

async function uploadImageHandler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { fileName, filePath, fileType, fileBuffer } = req.body;

        // Create repository and use case instances
        const fileRepository = new PgFileRepository();
        const uploadFileUseCase = new UploadFileUseCase(fileRepository);

        // Execute the upload use case
        const result = await uploadFileUseCase.execute({
            fileName,
            filePath,
            fileType,
            fileBuffer
        });

        return res.status(200).json(result);

    } catch (error) {
        console.error('Error in upload handler:', error);
        
        // Handle specific error types
        if (error instanceof Error) {
            if (error.message.includes('Missing required environment variables')) {
                return res.status(500).json({ 
                    error: 'Server configuration error: Missing AWS environment variables',
                    details: error.message
                });
            }
            
            if (error.message.includes('Missing fileName') || 
                error.message.includes('Missing fileBuffer') ||
                error.message.includes('fileBuffer must be a base64 string') ||
                error.message.includes('File too large')) {
                return res.status(400).json({ 
                    error: error.message 
                });
            }
        }
        
        return res.status(500).json({
            error: 'Failed to process and upload images',
            details: error instanceof Error ? error.message : String(error)
        });
    }
}
