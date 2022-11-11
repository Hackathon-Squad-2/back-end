import { Request, Response } from 'express';

import { UserProfileUseCase } from './UserProfileUseCase';

export class UserProfileController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const userProfileUseCase = new UserProfileUseCase();

    const user = await userProfileUseCase.execute(id);

    return response.status(200).json(user);
  }
}
