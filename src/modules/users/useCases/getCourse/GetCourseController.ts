import { Request, Response } from 'express';

import { GetCourseUseCase } from './GetCouseUseCase';

export class GetCourseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { trailId } = request.params;

    const getCourseUseCase = new GetCourseUseCase();

    const course = await getCourseUseCase.execute(trailId);

    return response.status(200).json(course);
  }
}
