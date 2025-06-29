import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateRoleModel1751226642304 implements MigrationInterface {
  name = 'UpdateRoleModel1751226642304';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "roles" RENAME COLUMN "isActive" TO "slug"`,
    );
    await queryRunner.query(`ALTER TABLE "roles" DROP COLUMN "slug"`);
    await queryRunner.query(
      `ALTER TABLE "roles" ADD "slug" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "roles" ADD CONSTRAINT "UQ_881f72bac969d9a00a1a29e1079" UNIQUE ("slug")`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "roles" DROP CONSTRAINT "UQ_881f72bac969d9a00a1a29e1079"`,
    );
    await queryRunner.query(`ALTER TABLE "roles" DROP COLUMN "slug"`);
    await queryRunner.query(
      `ALTER TABLE "roles" ADD "slug" boolean NOT NULL DEFAULT true`,
    );
    await queryRunner.query(
      `ALTER TABLE "roles" RENAME COLUMN "slug" TO "isActive"`,
    );
  }
}
