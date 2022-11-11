import { Trail } from '@prisma/client';

import { prisma } from '../../../../database';
import { AppError } from '../../../../shared/errors/AppError';

type IRequest = {
  id: string;
  payload: Omit<Trail, 'id'>;
};

export class EditTrailUseCase {
  async execute({ id, payload }: IRequest): Promise<Trail> {
    const trail = await prisma.trail.findFirst({ where: { id } });

    if (!trail) {
      throw new AppError('Trail not found', 404);
    }

    return await prisma.trail.update({
      where: {
        id: trail.id,
      },
      data: { ...payload },
    });
  }
}
