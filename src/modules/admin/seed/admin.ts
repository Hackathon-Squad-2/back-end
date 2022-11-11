import { hash } from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const hashPassword = await hash('squad2admin', 10);

  await prisma.user.upsert({
    where: { email: 'admin@squad2.com' },
    update: {},
    create: {
      name: 'Admin',
      email: 'admin@squad2.com',
      password: hashPassword,
      isAdmin: true,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async () => {
    await prisma.$disconnect();
  });
