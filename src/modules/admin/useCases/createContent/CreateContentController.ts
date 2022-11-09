import { Request, Response } from 'express';

import { IContent } from '../../dtos/ICreateContentDTO';
import { CreateContentUseCase } from './CreateContentUseCase';

export class CreateContentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { trailId } = request.params;
    const content: IContent = request.body;

    const createContentUseCase = new CreateContentUseCase();

    const createdContent = await createContentUseCase.execute({
      trailId,
      content,
    });

    return response.status(201).json(createdContent);
  }
}
