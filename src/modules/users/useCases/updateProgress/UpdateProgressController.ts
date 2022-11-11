import { Request, Response } from 'express';

import { UpdateProgressUseCase } from './UpdateProgressUseCase';

export class UpdateProgressController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: userId } = request.user;
    const { trailId, contentId } = request.params;
    const { status } = request.body;

    const updateProgressUseCase = new UpdateProgressUseCase();

    const updatedProgress = await updateProgressUseCase.execute({
      userId,
      trailId,
      contentId,
      status,
    });

    return response.status(200).json(updatedProgress);
  }
}
