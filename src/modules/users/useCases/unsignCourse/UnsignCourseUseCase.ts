import { Course } from '@prisma/client';

import { prisma } from '../../../../database';

type IRequest = {
  userId: string;
  trailId: string;
};

export class UnsignCourseUseCase {
  async execute({ userId, trailId }: IRequest): Promise<Course> {
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
