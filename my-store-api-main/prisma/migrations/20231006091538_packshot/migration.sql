-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "thumbnail" TEXT NOT NULL,
    "packshot" TEXT NOT NULL DEFAULT '/uploads/',
    "price" INTEGER NOT NULL
);
INSERT INTO "new_Product" ("active", "description", "id", "name", "price", "thumbnail") SELECT "active", "description", "id", "name", "price", "thumbnail" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
