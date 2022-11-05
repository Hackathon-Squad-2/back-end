import { Prisma } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

import { prisma } from '../../../../database';
import { AppError } from '../../../../shared/errors/AppError';

type IRequest = {
  id: string;
  trailsIdList: string[];
};

export class SignCoursesUseCase {
  async execute({ id, trailsIdList }: IRequest): Promise<Prisma.BatchPayload> {
    try {
      return await prisma.course.createMany({
        data: trailsIdList.map((trail) => ({ userId: id, trailId: trail })),
        skipDuplicates: true,
      });
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        const field = err.meta?.field_name as string | undefined;

        if (field) {
          if (field.includes('trailId')) {
            throw new AppError('Course not found', 404);
          }

          if (field.includes('userId')) {
            throw new AppError('Unauthorized', 401);
          }
        }
      }

      throw err;
    }
  }
}
