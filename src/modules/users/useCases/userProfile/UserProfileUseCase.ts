import { User } from '@prisma/client';

import { prisma } from '../../../../database';
import { AppError } from '../../../../shared/errors/AppError';

export class UserProfileUseCase {
  async execute(id: string): Promise<User> {
    const user = await prisma.user.findFirst({ where: { id } });

    if (!user) {
      throw new AppError('Unauthorized', 401);
    }

    return user;
  }
}
