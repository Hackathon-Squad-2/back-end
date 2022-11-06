import { prisma } from '../../../../database';
import { AppError } from '../../../../shared/errors/AppError';

export class DeleteTrailUseCase {
  async execute(id: string) {
    const trail = await prisma.trail.findFirst({
      where: { id, deletedAt: null },
    });

    if (!trail) {
      throw new AppError('Trail not found', 404);
    }

    return await prisma.trail.update({
      where: { id },
      data: {
        ...trail,
        deletedAt: new Date(),
      },
    });
  }
}
