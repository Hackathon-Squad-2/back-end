import { verify } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

import { AppError } from '../../../errors/AppError';

interface IPayload {
  sub: string;
}

export const ensureAuthenticated = async (
  request: Request,
  _response: Response,
  next: NextFunction
) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: id } = verify(token, process.env.JWT_PASS ?? '') as IPayload;

    request.user = { id };

    next();
  } catch (error) {
    throw new AppError('Invalid token', 401);
  }
};
