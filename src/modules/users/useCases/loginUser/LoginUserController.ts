import { Request, Response } from 'express';

import { LoginUserUseCase } from './LoginUserUseCase';

export class LoginUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const loginUserUseCase = new LoginUserUseCase();

    const user = await loginUserUseCase.execute({ email, password });

    return response.status(200).json(user);
  }
}
