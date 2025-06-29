import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTable1751224833005 implements MigrationInterface {
  name = 'CreateUserTable1751224833005';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying NOT NULL, "email" character varying NOT NULL, "password_hash" text NOT NULL, "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_USERS_IS_ACTIVE" ON "users" ("is_active") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_USERS_EMAIL" ON "users" ("email") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_USERS_USERNAME" ON "users" ("username") `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "public"."IDX_USERS_USERNAME"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_USERS_EMAIL"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_USERS_IS_ACTIVE"`);
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
