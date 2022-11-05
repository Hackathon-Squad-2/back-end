import { Request, Response } from 'express';

import { SignCoursesUseCase } from './SignCoursesUseCase';

export class SignCoursesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const { trailsIdList } = request.body;

    const signCoursesUseCase = new SignCoursesUseCase();

    const count = await signCoursesUseCase.execute({ id, trailsIdList });

    return response.status(200).json({ count });
  }
}
