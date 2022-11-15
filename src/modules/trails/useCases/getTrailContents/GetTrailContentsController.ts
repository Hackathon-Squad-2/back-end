import { Request, Response } from 'express';

import { GetTrailContentsUseCase } from './GetTrailContentsUseCase';

export class GetTrailContentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { trailId } = request.params;

    const getTrailContentsUseCase = new GetTrailContentsUseCase();

    const contents = await getTrailContentsUseCase.execute(trailId);

    return response.status(200).json(contents);
  }
}
