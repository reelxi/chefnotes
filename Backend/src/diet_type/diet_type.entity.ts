import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Entity representing a diet type (e.g., vegan, vegetarian, keto).
 */
@Entity()
export class DietType {
  /**
   * Unique identifier for the diet type (UUID).
   */
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  /**
   * Unique name of the diet type.
   */
  @Column({ unique: true })
  name: string;
}
