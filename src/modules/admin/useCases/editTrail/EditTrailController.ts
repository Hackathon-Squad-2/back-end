import { Trail } from '@prisma/client';
import { Request, Response } from 'express';

import { EditTrailUseCase } from './EditTrailUseCase';

type IEditTrailPayload = Trail;

export class EditTrailController {
  async handle(request: Request, response: Response): Promise<Response> {
    const payload: IEditTrailPayload = request.body;

    const editTrailUseCase = new EditTrailUseCase();

    const editedTrail = await editTrailUseCase.execute(payload);

    return response.status(200).json(editedTrail);
  }
}
