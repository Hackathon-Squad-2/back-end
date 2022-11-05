import { Prisma } from '@prisma/client';

import { prisma } from '../../../../database';

type IRequest = {
  id: string;
  trailsIdList: string[];
};

export class SignCoursesUseCase {
  async execute({ id, trailsIdList }: IRequest): Promise<Prisma.BatchPayload> {
    try {
      return await prisma.course.createMany({
        data: trailsIdList.map((trail) => ({ userId: id, trailId: trail })),
        skipDuplicates: true,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
