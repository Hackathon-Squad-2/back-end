import { Request, Response } from 'express';

import { GetTrailProgressUseCase } from './GetTrailProgressUseCase';

export class GetTrailProgressController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: userId } = request.user;
    const { trailId } = request.params;

    const getTrailProgressUseCase = new GetTrailProgressUseCase();

    const progress = await getTrailProgressUseCase.execute({
      userId,
      trailId,
    });

    return response.status(200).json(progress);
  }
}
