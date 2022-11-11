import { prisma } from '../../../../database';
import { AppError } from '../../../../shared/errors/AppError';

export class GetCoursesUseCase {
  async execute(id: string) {
    const courses = await prisma.course.findMany({
      where: { userId: id },
      select: {
        trailId: true,
      },
    });

    if (courses.length == 0) {
      throw new AppError('No courses found', 404);
    }

    return await prisma.trail.findMany({
      where: {
        id: {
          in: courses.map((c) => c.trailId),
        },
        deletedAt: null,
      },
      select: {
        id: true,
        title: true,
        banner: true,
        description: true,
        creator: true,
        duration: true,
        content: {
          select: {
            id: true,
            title: true,
            type: true,
            creator: true,
            duration: true,
            url: true,
            progress: {
              select: {
                status: true,
              },
            },
          },
        },
      },
    });
  }
}
