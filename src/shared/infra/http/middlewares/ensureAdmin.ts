import { NextFunction, Request, Response } from 'express';

import { prisma } from '../../../../database';
import { AppError } from '../../../errors/AppError';

export const ensureAdmin = async (
  request: Request,
  _response: Response,
  next: NextFunction
) => {
  const { id } = request.user;

  const user = await prisma.user.findFirst({ where: { id } });

  if (!user?.isAdmin) {
    throw new AppError('No allowed', 401);
  }

  next();
};
