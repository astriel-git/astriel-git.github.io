/*
  Warnings:

  - You are about to drop the column `ruleId` on the `Natureza` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `regraTributacao` table. All the data in the column will be lost.
  - You are about to drop the `Access` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX `Company_customerId_fkey` ON `Company`;

-- DropIndex
DROP INDEX `Natureza_id_key` ON `Natureza`;

-- DropIndex
DROP INDEX `Natureza_ruleId_key` ON `Natureza`;

-- DropIndex
DROP INDEX `regraTributacao_id_key` ON `regraTributacao`;

-- DropIndex
DROP INDEX `regraTributacao_productId_key` ON `regraTributacao`;

-- AlterTable
ALTER TABLE `Natureza` DROP COLUMN `ruleId`,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `regraTributacao` DROP COLUMN `productId`,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `Access`;

-- CreateTable
CREATE TABLE `_ProductToregraTributacao` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ProductToregraTributacao_AB_unique`(`A`, `B`),
    INDEX `_ProductToregraTributacao_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_NaturezaToregraTributacao` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_NaturezaToregraTributacao_AB_unique`(`A`, `B`),
    INDEX `_NaturezaToregraTributacao_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Customer` ADD CONSTRAINT `Customer_certificateId_fkey` FOREIGN KEY (`certificateId`) REFERENCES `DigitalCertificate`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Company` ADD CONSTRAINT `Company_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProductToregraTributacao` ADD CONSTRAINT `_ProductToregraTributacao_A_fkey` FOREIGN KEY (`A`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProductToregraTributacao` ADD CONSTRAINT `_ProductToregraTributacao_B_fkey` FOREIGN KEY (`B`) REFERENCES `regraTributacao`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_NaturezaToregraTributacao` ADD CONSTRAINT `_NaturezaToregraTributacao_A_fkey` FOREIGN KEY (`A`) REFERENCES `Natureza`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_NaturezaToregraTributacao` ADD CONSTRAINT `_NaturezaToregraTributacao_B_fkey` FOREIGN KEY (`B`) REFERENCES `regraTributacao`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
