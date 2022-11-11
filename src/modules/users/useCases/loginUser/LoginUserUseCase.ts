import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { prisma } from '../../../../database';
import { AppError } from '../../../../shared/errors/AppError';

type IRequest = {
  email: string;
  password: string;
};

export class LoginUserUseCase {
  async execute({ email, password }: IRequest) {
    const user = await prisma.user.findFirst({ where: { email } });

    if (!user) {
      throw new AppError('E-mail or password incorrect', 400);
    }

    const comparePass = await compare(password, user.password);

    if (!comparePass) {
      throw new AppError('E-mail or password incorrect', 400);
    }

    const token = sign({ id: user.id }, process.env.JWT_PASS ?? '', {
      subject: user.id,
      expiresIn: '1d',
    });

    return {
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    };
  }
}
