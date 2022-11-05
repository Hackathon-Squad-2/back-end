import { Course } from '@prisma/client';

import { prisma } from '../../../../database';
import { AppError } from '../../../../shared/errors/AppError';

type IRequest = {
  userId: string;
  trailId: string;
};

export class UnsignCourseUseCase {
  async execute({ userId, trailId }: IRequest): Promise<Course> {
    const courseExists = await prisma.course.findFirst({ where: { trailId } });

    if (!courseExists) {
      throw new AppError('Course not found', 404);
    }

    const course = await prisma.course.delete({
      where: {
        userId_trailId: {
          userId,
          trailId,
        },
      },
    });

    return course;
  }
}
