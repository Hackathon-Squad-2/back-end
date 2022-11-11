import { Trail } from '@prisma/client';

import { prisma } from '../../../../database';
import { AppError } from '../../../../shared/errors/AppError';

type IRequest = Omit<Trail, 'id'>;

export class CreateTrailUseCase {
  async execute({
    banner,
    title,
    description,
    creator,
    duration,
  }: IRequest): Promise<Trail> {
    const trailExists = await prisma.trail.findFirst({ where: { title } });

    if (trailExists) {
      throw new AppError('Trail already exists', 409);
    }

    return await prisma.trail.create({
      data: {
        banner,
        title,
        description,
        creator,
        duration,
      },
    });
  }
}
