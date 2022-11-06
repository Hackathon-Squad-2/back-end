import { Trail } from '@prisma/client';
import { Request, Response } from 'express';

import { EditTrailUseCase } from './EditTrailUseCase';

type IEditTrailPayload = Omit<Trail, 'id'>;

export class EditTrailController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { trailId: id } = request.params;
    const payload: IEditTrailPayload = request.body;

    const editTrailUseCase = new EditTrailUseCase();

    const editedTrail = await editTrailUseCase.execute({ id, payload });

    return response.status(200).json(editedTrail);
  }
}
