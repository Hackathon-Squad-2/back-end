import { User } from '@prisma/client';

import { prisma } from '../../../../database';
import { AppError } from '../../../../shared/errors/AppError';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';

export class CreateUserUseCase {
  async execute({ name, email, password }: ICreateUserDTO): Promise<User> {
    const userExists = await prisma.user.findFirst({ where: { email } });

    if (userExists) {
      throw new AppError('User already exists', 403);
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return user;
  }
}
