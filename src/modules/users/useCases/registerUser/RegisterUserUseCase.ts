import { User } from '@prisma/client';

import { prisma } from '../../../../database';
import { AppError } from '../../../../shared/errors/AppError';

import { IRegisterUserDTO } from '../../dtos/IRegisterUserDTO';

type IResponse = Omit<User, 'password'>;

export class RegisterUserUseCase {
  async execute({
    name,
    email,
    password,
  }: IRegisterUserDTO): Promise<IResponse> {
    const userExists = await prisma.user.findFirst({ where: { email } });

    if (userExists) {
      throw new AppError('User already exists', 400);
    }

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    const user = Object.assign(newUser);
    delete user.password;

    return user;
  }
}
