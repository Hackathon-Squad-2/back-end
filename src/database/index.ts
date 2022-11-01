import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

export const ConnectDB = async () => {
  try {
    await prisma.$connect();
    console.log('Database connected!');
  } catch (error) {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};
