import { Trail } from '@prisma/client';
import { prisma } from '../../../../database';

type IRequest = Omit<Trail, 'id'>;

export class CreateTrailUseCase {
  async execute({
    banner,
    title,
    description,
    creator,
    duration,
  }: IRequest): Promise<Trail> {
    const trail = await prisma.trail.create({
      data: {
        banner,
        title,
        description,
        creator,
        duration,
      },
    });

    return trail;
  }
}
