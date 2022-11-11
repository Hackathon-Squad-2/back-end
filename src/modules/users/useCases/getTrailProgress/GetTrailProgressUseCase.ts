import { prisma } from '../../../../database';
import { AppError } from '../../../../shared/errors/AppError';

type IRequest = {
  userId: string;
  trailId: string;
};

export class GetTrailProgressUseCase {
  async execute({ userId, trailId }: IRequest) {
    const trail = await prisma.trail.findFirst({
      where: { id: trailId, deletedAt: null },
    });

    if (!trail) {
      throw new AppError('Trail not found', 404);
    }

    const contents = await prisma.content.findMany({
      where: { trailId, deletedAt: null },
    });

    if (contents.length == 0) {
      throw new AppError('Content not found', 404);
    }

    const progress = await prisma.progress.findMany({
      where: {
        userId,
        contentId: {
          in: contents.map((content) => content.id),
        },
      },
    });

    return {
      progress: progress.filter((p) => p.status === 'finished').length,
    };
  }
}
