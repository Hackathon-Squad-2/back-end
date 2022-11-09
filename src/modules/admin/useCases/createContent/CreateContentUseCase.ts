import { prisma } from '../../../../database';
import { AppError } from '../../../../shared/errors/AppError';
import { ICreateContentDTO } from '../../dtos/ICreateContentDTO';

export class CreateContentUseCase {
  async execute({ trailId, content }: ICreateContentDTO) {
    const trail = await prisma.trail.findFirst({
      where: { id: trailId, deletedAt: null },
    });

    if (!trail) {
      throw new AppError('Trail not found', 404);
    }

    return await prisma.content.create({
      data: {
        ...content,
        trailId,
      },
    });
  }
}
