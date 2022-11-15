import { prisma } from '../../../../database';
import { AppError } from '../../../../shared/errors/AppError';

export class GetTrailContentsUseCase {
  async execute(trailId: string) {
    const trail = await prisma.trail.findFirst({
      where: { id: trailId, deletedAt: null },
    });

    if (!trail) {
      throw new AppError('Trail not found', 404);
    }

    return await prisma.trail.findFirst({
      where: { id: trailId, deletedAt: null },
      select: {
        title: true,
        description: true,
        content: {
          select: {
            id: true,
            title: true,
            type: true,
            creator: true,
          },
        },
      },
    });
  }
}
