import { prisma } from '../../../../database';
import { AppError } from '../../../../shared/errors/AppError';

type IRequest = {
  userId: string;
  trailId: string;
  contentId: string;
  status: 'available' | 'going' | 'finished';
};

export class UpdateProgressUseCase {
  async execute({ userId, trailId, contentId, status }: IRequest) {
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

    return await prisma.progress.update({
      where: {
        userId_contentId: {
          userId,
          contentId,
        },
      },
      data: {
        status,
      },
    });
  }
}
