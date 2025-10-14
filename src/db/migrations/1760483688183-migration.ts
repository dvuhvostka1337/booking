import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1760483688183 implements MigrationInterface {
    name = 'Migration1760483688183'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_9eaa0bf62bfb88bb4469436424" ON "booking" ("user_id", "event_id") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_9eaa0bf62bfb88bb4469436424"`);
    }

}
