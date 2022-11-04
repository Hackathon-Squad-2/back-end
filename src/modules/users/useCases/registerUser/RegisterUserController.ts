import { Request, Response } from 'express';

import { RegisterUserUseCase } from './RegisterUserUseCase';

export class RegisterUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const registerUserUseCase = new RegisterUserUseCase();

    const user = await registerUserUseCase.execute({ name, email, password });

    return response.status(201).json(user);
  }
}
