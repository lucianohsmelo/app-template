import { Controller } from '../../controllers/controller';
import { Request, Response } from 'express';

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpResponse = await controller.handle();
    console.log(httpResponse);
    res.status(httpResponse.statusCode).json(httpResponse.data);
  };
};
