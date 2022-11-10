import { prisma } from '../../../../database';
import { AppError } from '../../../../shared/errors/AppError';

export class GetCourseUseCase {
  async execute(trailId: string) {
    const trail = await prisma.trail.findFirst({
      where: { id: trailId, deletedAt: null },
    });

    if (!trail) {
      throw new AppError('Trail not found', 404);
    }

    return await prisma.content.findMany({
      where: {
        trailId,
        deletedAt: null,
      },
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
    });
  }
}
