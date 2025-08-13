import { NextApiRequest, NextApiResponse } from 'next';

export const errorHandlerMiddleware = (err: any, req: NextApiRequest, res: NextApiResponse, next: () => void) => {
  console.error('API Error:', err);
  
  // Handle specific error types
  if (err.name === 'ValidationError') {
    return res.status(400).json({ 
      error: 'Validation Error', 
      details: err.message 
    });
  }
  
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ 
      error: 'Unauthorized', 
      details: err.message 
    });
  }
  
  // Default error response
  return res.status(500).json({ 
    error: 'Internal Server Error', 
    details: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
}; 