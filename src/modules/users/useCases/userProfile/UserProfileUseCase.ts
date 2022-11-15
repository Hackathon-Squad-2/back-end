import { prisma } from '../../../../database';
import { AppError } from '../../../../shared/errors/AppError';

export class UserProfileUseCase {
  async execute(id: string) {
    const user = await prisma.user.findFirst({ where: { id } });

    if (!user) {
      throw new AppError('Unauthorized', 401);
    }

    const courses = await prisma.course.findMany({
      where: { userId: id },
    });

    return await prisma.trail.findMany({
      where: {
        id: {
          in: courses.map((course) => course.trailId),
        },
        deletedAt: null,
      },
      select: {
        id: true,
        title: true,
      },
    });
  }
}
