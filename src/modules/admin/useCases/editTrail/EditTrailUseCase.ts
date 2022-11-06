import { Trail } from '@prisma/client';

import { prisma } from '../../../../database';
import { AppError } from '../../../../shared/errors/AppError';

type IRequest = Trail;

export class EditTrailUseCase {
  async execute({ id, ...rest }: IRequest): Promise<Trail> {
    const trail = await prisma.trail.findFirst({ where: { id } });

    if (!trail) {
      throw new AppError('Course not found', 404);
    }

    return await prisma.trail.update({
      where: {
        id: trail.id,
      },
      data: { ...rest },
    });
  }
}
