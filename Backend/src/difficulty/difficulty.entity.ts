import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Entity representing a difficulty level (e.g., easy, medium, hard).
 */
@Entity()
export class Difficulty {
  /**
   * Unique identifier for the difficulty level (UUID).
   */
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  /**
   * Unique name of the difficulty level.
   */
  @Column({ unique: true })
  name: string;
}
