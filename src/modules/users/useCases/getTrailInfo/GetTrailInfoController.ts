import { Request, Response } from 'express';
import { GetTrailInfoUseCase } from './GetTrailInfotUseCase';

export class GetTrailInfoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { trailId } = request.params;

    const getTrailInfoUseCase = new GetTrailInfoUseCase();

    const trailInfo = await getTrailInfoUseCase.execute(trailId);

    return response.status(200).json(trailInfo);
  }
}
