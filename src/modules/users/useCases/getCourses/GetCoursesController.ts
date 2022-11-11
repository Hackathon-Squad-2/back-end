import { Request, Response } from 'express';

import { GetCoursesUseCase } from './GetCoursesUseCase';

export class GetCoursesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const getCoursesUseCase = new GetCoursesUseCase();

    const courses = await getCoursesUseCase.execute(id);

    return response.status(200).json(courses);
  }
}
