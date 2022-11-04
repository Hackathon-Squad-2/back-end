-- CreateEnum
CREATE TYPE "Status" AS ENUM ('started', 'going', 'finished');

-- CreateTable
CREATE TABLE "Progress" (
    "status" "Status" NOT NULL,
    "userId" TEXT NOT NULL,
    "contentId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Progress_userId_contentId_key" ON "Progress"("userId", "contentId");

-- AddForeignKey
ALTER TABLE "Progress" ADD CONSTRAINT "Progress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Progress" ADD CONSTRAINT "Progress_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "Content"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
