import { User } from '@prisma/client';

import { prisma } from '../../../../database';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';

export class CreateUserUseCase {
  async execute({ name, email, password }: ICreateUserDTO): Promise<User> {
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
