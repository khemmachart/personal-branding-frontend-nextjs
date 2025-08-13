import cors from 'nextjs-cors';
import { NextApiRequest, NextApiResponse } from 'next';

export const corsMiddleware = async (req: NextApiRequest, res: NextApiResponse, next: () => void) => {
  await cors(req, res, {
    origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });
  next();
}; 