import { prisma } from '../../../../database';
import { AppError } from '../../../../shared/errors/AppError';

type IResponse = {
  name: string;
  email: string;
  createAt: Date;
};

export class UserProfileUseCase {
  async execute(id: string): Promise<IResponse> {
    const user = await prisma.user.findFirst({ where: { id } });

    if (!user) {
      throw new AppError('Unauthorized', 401);
    }

    return {
      name: user.name,
      email: user.email,
      createAt: user.createdAt,
    };
  }
}
