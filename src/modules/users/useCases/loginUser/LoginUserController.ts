import { Request, Response } from 'express';

export class LoginUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
  }
}
