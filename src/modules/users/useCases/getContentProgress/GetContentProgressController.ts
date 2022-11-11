import { Request, Response } from 'express';
import { GetContentProgressUseCase } from './GetContentProgressUseCase';

export class GetContentProgressController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: userId } = request.user;
    const { trailId, contentId } = request.body;

    const getContentProgressUseCase = new GetContentProgressUseCase();

    const contentProgress = await getContentProgressUseCase.execute({
      userId,
      trailId,
      contentId,
    });

    return response.status(200).json(contentProgress);
  }
}
