import { Request, Response } from 'express';

import { IContent } from '../../dtos/ICreateContentDTO';
import { EditContentUseCase } from './EditContentUseCase';

export class EditContentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { trailId, contentId } = request.params;
    const content: IContent = request.body;

    const editContentUseCase = new EditContentUseCase();

    const editedContent = await editContentUseCase.execute({
      trailId,
      contentId,
      content,
    });

    return response.status(200).json(editedContent);
  }
}
