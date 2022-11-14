import { Request, Response } from 'express';

import { GetTrailsUseCase } from './GetTrailsUseCase';

export class GetTrailsController {
  async handle(_request: Request, response: Response): Promise<Response> {
    const getTrailsUseCase = new GetTrailsUseCase();

    const trails = await getTrailsUseCase.execute();

    return response.status(200).json(trails);
  }
}
