import { Trail } from '@prisma/client';
import { Request, Response } from 'express';

import { CreateTrailUseCase } from './CreateTrailUseCase';

type ICreateTrailPayload = Omit<Trail, 'id'>;

export class CreateTrailController {
  async handle(request: Request, response: Response): Promise<Response> {
    const payload: ICreateTrailPayload = request.body;

    const createTrailUseCase = new CreateTrailUseCase();

    const trail = await createTrailUseCase.execute(payload);

    return response.status(201).json(trail);
  }
}
