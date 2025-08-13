import type { NextApiRequest, NextApiResponse } from "next";
import { corsMiddleware } from "libs/middlewares/corsMiddleware";
import { errorHandlerMiddleware } from "libs/middlewares/errorHandlerMiddleware";
import connect from "next-connect";
import { getBusinessRolesData } from "libs/modules/backOffices/useCases/getRolesUseCase";

export default connect({ onError: errorHandlerMiddleware })
  .use(corsMiddleware)
  .get(getRolesHandler);

async function getRolesHandler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=86400');
  res.setHeader('ETag', `"${Date.now()}"`);
  return res.status(200).json(getBusinessRolesData);
}
