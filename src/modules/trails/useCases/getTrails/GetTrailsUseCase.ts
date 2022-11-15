import { prisma } from '../../../../database';

export class GetTrailsUseCase {
  async execute() {
    return await prisma.trail.findMany({
      where: { deletedAt: null },
      select: {
        id: true,
        title: true,
        description: true,
        creator: true,
        duration: true,
      },
    });
  }
}
