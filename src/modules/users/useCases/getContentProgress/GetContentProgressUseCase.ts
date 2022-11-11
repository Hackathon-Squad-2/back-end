import { prisma } from '../../../../database';
import { AppError } from '../../../../shared/errors/AppError';

type IRequest = {
  userId: string;
  trailId: string;
  contentId: string;
};

export class GetContentProgressUseCase {
  async execute({ userId, trailId, contentId }: IRequest) {
    const trail = await prisma.trail.findFirst({
      where: { id: trailId, deletedAt: null },
    });

    if (!trail) {
      throw new AppError('Trail not found', 404);
    }

    const content = await prisma.content.findFirst({
      where: { id: contentId, deletedAt: null },
    });

    if (!content) {
      throw new AppError('Content not found', 404);
    }

    const progress = await prisma.progress.findFirst({
      where: { userId, contentId },
    });

    return {
      status: progress?.status,
    };
  }
}
