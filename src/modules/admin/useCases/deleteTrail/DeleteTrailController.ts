import { Request, Response } from 'express';

export class DeleteTrailController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { traild: id } = request.params;

    return response.status(200).json({ message: id });
  }
}
