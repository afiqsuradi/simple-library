import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedDefaultRoles1751227187062 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO roles (id, name, slug, description, created_at, updated_at)
            VALUES
                (uuid_generate_v4(), 'Admin', 'admin', 'System administrator with full access', NOW(), NOW()),
                (uuid_generate_v4(), 'User', 'user', 'Student with basic access to borrow books', NOW(), NOW()),
                (uuid_generate_v4(), 'Moderator', 'moderator', 'Content moderator and manager that handles approval of borrowing book', NOW(), NOW())
        `);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM roles 
            WHERE slug IN ('admin', 'user', 'moderator')
        `);

    }

}
