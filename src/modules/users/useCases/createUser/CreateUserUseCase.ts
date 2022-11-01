import { prisma } from '../../../../database';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';

export class CreateUserUseCase {
  async execute({ name, email, password }: ICreateUserDTO): Promise<void> {
    await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
  }
}
