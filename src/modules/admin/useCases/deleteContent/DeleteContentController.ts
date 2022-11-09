import { Request, Response } from 'express';

import { DeleteContentUseCase } from './DeleteContentUseCase';

export class DeleteContentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { trailId, contentId } = request.params;

    const deleteContentUseCase = new DeleteContentUseCase();

    const deletedContent = await deleteContentUseCase.execute({
      trailId,
      contentId,
    });

    return response.status(204).json(deletedContent);
  }
}
