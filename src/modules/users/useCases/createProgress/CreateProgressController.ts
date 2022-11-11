import { Request, Response } from 'express';

import { CreateProgressUseCase } from './CreateProgressUseCase';

export class CreateProgressController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: userId } = request.user;
    const { trailId, contentId } = request.params;

    const createProgressUseCase = new CreateProgressUseCase();

    const progress = await createProgressUseCase.execute({
      userId,
      trailId,
      contentId,
    });

    return response.status(201).json(progress);
  }
}
