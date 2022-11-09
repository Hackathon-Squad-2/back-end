import { prisma } from '../../../../database';
import { AppError } from '../../../../shared/errors/AppError';

type IRequest = {
  trailId: string;
  contentId: string;
};

export class DeleteContentUseCase {
  async execute({ trailId, contentId }: IRequest) {
    const trail = await prisma.trail.findFirst({
      where: { id: trailId, deletedAt: null },
    });

    if (!trail) {
      throw new AppError('Trail not found', 404);
    }

    const content = await prisma.content.findFirst({ where: { trailId } });

    if (!content) {
      throw new AppError('Content not found', 404);
    }

    return await prisma.content.update({
      where: { id: contentId },
      data: {
        ...content,
        deletedAt: new Date(),
      },
    });
  }
}
