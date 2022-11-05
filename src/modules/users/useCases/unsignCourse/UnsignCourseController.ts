import { Request, Response } from 'express';

import { UnsignCourseUseCase } from './UnsignCourseUseCase';

export class UnsignCourseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: userId } = request.user;
    const { trailId } = request.params;

    const unsignCourseUseCase = new UnsignCourseUseCase();

    const unsignedCourse = await unsignCourseUseCase.execute({
      userId,
      trailId,
    });

    return response.status(204).json(unsignedCourse);
  }
}
