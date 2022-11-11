-- CreateEnum
CREATE TYPE "ContentType" AS ENUM ('artigo', 'live', 'video', 'glossario', 'apostila', 'livro', 'curso', 'podcast', 'playlist', 'ferramenta', 'desafio');

-- CreateTable
CREATE TABLE "Content" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "type" "ContentType" NOT NULL,
    "creator" TEXT NOT NULL,
    "duration" INTEGER,
    "url" TEXT NOT NULL,
    "trailId" TEXT NOT NULL,

    CONSTRAINT "Content_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Content" ADD CONSTRAINT "Content_trailId_fkey" FOREIGN KEY ("trailId") REFERENCES "Trail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
