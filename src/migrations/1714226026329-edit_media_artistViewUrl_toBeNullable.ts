import { MigrationInterface, QueryRunner } from "typeorm";

export class EditMediaArtistViewUrlToBeNullable1714226026329 implements MigrationInterface {
    name = 'EditMediaArtistViewUrlToBeNullable1714226026329'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "media" ALTER COLUMN "artistViewUrl" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "media" ALTER COLUMN "artistViewUrl" SET NOT NULL`);
    }

}
