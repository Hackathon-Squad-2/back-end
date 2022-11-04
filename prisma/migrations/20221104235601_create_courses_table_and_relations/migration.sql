-- CreateTable
CREATE TABLE "Course" (
    "userId" TEXT NOT NULL,
    "trailId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Course_userId_trailId_key" ON "Course"("userId", "trailId");

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_trailId_fkey" FOREIGN KEY ("trailId") REFERENCES "Trail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
