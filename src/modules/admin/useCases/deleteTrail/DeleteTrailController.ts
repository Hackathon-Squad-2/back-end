import { Request, Response } from 'express';

import { DeleteTrailUseCase } from './DeleteTrailUseCase';

export class DeleteTrailController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { trailId } = request.params;

    const deleteTrailUseCase = new DeleteTrailUseCase();

    const deletedTrail = await deleteTrailUseCase.execute(trailId);

    return response.status(204).json(deletedTrail);
  }
}
