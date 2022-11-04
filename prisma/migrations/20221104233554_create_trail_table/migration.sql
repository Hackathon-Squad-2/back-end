-- CreateTable
CREATE TABLE "Trail" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "banner" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,

    CONSTRAINT "Trail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Trail_title_key" ON "Trail"("title");
