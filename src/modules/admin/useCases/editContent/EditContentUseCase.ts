import { Content } from '@prisma/client';

import { prisma } from '../../../../database';
import { AppError } from '../../../../shared/errors/AppError';

type IRequest = {
  trailId: string;
  contentId: string;
  content: Omit<Content, 'id' | 'trailId'>;
};

export class EditContentUseCase {
  async execute({ trailId, contentId, content }: IRequest) {
    const trail = await prisma.trail.findFirst({
      where: { id: trailId, deletedAt: null },
    });

    if (!trail) {
      throw new AppError('Trail not found', 404);
    }

    const contentExists = await prisma.content.findFirst({
      where: { id: contentId, trailId, deletedAt: null },
    });

    if (!contentExists) {
      throw new AppError('Invalid contentId', 404);
    }

    const editedContent = await prisma.content.update({
      where: {
        id: contentId,
      },
      data: {
        ...content,
        ...contentExists,
      },
    });

    console.log(editedContent);
  }
}
