import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Entity representing a role in the application.
 * Defines permissions or access-levels that can be assigned to users.
 */
@Entity()
export class Role {
  /**
   * Unique identifier for the role (UUID).
   */
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Name of the role (must be unique).
   */
  @Column({ unique: true })
  name: string;
}
