import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdatedUsersRoleTable1751226816651 implements MigrationInterface {
  name = 'UpdatedUsersRoleTable1751226816651';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE INDEX "IDX_USER_ROLES_USER_ROLE" ON "users_roles" ("user_id", "role_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_USER_ROLES_ROLE_ID" ON "users_roles" ("role_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_USER_ROLES_USER_ID" ON "users_roles" ("user_id") `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "public"."IDX_USER_ROLES_USER_ID"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_USER_ROLES_ROLE_ID"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_USER_ROLES_USER_ROLE"`);
  }
}
