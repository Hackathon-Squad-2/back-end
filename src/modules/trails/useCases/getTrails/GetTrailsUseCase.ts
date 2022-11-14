import { prisma } from '../../../../database';

export class GetTrailsUseCase {
  async execute() {
    return await prisma.trail.findMany({
      select: {
        title: true,
        description: true,
        creator: true,
        duration: true,
      },
    });
  }
}
