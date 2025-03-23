import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../role/role.entity';

/**
 * User entity represents the structure of a user record in the database.
 * It contains user-related information such as ID, name, email, password, and associated role.
 */
@Entity()
export class User {
  /**
   * Auto-generated unique identifier for the user.
   */
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  /**
   * Unique username for the user.
   */
  @Column({ unique: true })
  name: string;

  /**
   * Unique email address of the user.
   */
  @Column({ unique: true })
  email: string;

  /**
   * User password stored in a hashed format.
   */
  @Column()
  password: string;

  /**
   * The role associated with the user, defining permissions and access levels.
   */
  @ManyToOne(() => Role)
  role: Role;
}
