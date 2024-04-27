import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1714222824720 implements MigrationInterface {
    name = 'Init1714222824720'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "terms" ("id" SERIAL NOT NULL, "text" character varying NOT NULL, CONSTRAINT "PK_33b6fe77d6ace7ff43cc8a65958" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "media" ("id" SERIAL NOT NULL, "type" character varying NOT NULL, "name" character varying NOT NULL, "viewUrl" character varying NOT NULL, "artworkUrl100" character varying, "artist" character varying NOT NULL, "artistViewUrl" character varying NOT NULL, "termId" integer NOT NULL, CONSTRAINT "PK_f4e0fcac36e050de337b670d8bd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "media" ADD CONSTRAINT "FK_747ccd7e4228bfdb72d97d25119" FOREIGN KEY ("termId") REFERENCES "terms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "media" DROP CONSTRAINT "FK_747ccd7e4228bfdb72d97d25119"`);
        await queryRunner.query(`DROP TABLE "media"`);
        await queryRunner.query(`DROP TABLE "terms"`);
    }

}
