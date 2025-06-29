import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Role } from './role.entity';
import { UserRole } from './user-role.entity';

@Entity('users')
@Index('IDX_USERS_USERNAME', ['username'])
@Index('IDX_USERS_EMAIL', ['email'])
@Index('IDX_USERS_IS_ACTIVE', ['isActive'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
  })
  username: string;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
  })
  email: string;

  @Column({
    name: 'password_hash',
    type: 'text',
    nullable: false,
  })
  passwordHash: string;

  @Column({
    name: 'is_active',
    type: 'boolean',
    default: true,
    nullable: false,
  })
  isActive: boolean;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    nullable: false,
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    nullable: false,
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @OneToOne(() => UserRole, (userRole) => userRole.user, {
    cascade: true,
    onDelete: 'CASCADE',
    eager: true,
  })
  @JoinColumn({ name: 'user_role_id' })
  userRole: UserRole;

  @Column({ name: 'user_role_id' })
  userRoleId: string;
}
