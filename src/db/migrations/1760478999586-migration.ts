import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration.ts1760478999586 implements MigrationInterface {
    name = 'Migration.ts1760478999586'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "booking" ("id" SERIAL NOT NULL, "event_id" integer NOT NULL, "user_id" character varying(255) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "eventId" integer, CONSTRAINT "PK_49171efc69702ed84c812f33540" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "event" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "total_seats" integer NOT NULL, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_161ef84a823b75f741862a77138" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_161ef84a823b75f741862a77138"`);
        await queryRunner.query(`DROP TABLE "event"`);
        await queryRunner.query(`DROP TABLE "booking"`);
    }

}
