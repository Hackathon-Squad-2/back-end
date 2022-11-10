import { Request, Response } from 'express';

import { GetCourseTrailUseCase } from './GetCouseTrailUseCase';

export class GetCourseTrailController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { trailId } = request.params;

    const getCourseUseCase = new GetCourseTrailUseCase();

    const course = await getCourseUseCase.execute(trailId);

    return response.status(200).json(course);
  }
}
