import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Entity representing a unit of measurement (e.g., gram, liter, piece).
 */
@Entity()
export class Unit {
  /**
   * Unique identifier for the unit (UUID).
   */
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  /**
   * Unique name of the unit.
   */
  @Column({ unique: true })
  name: string;
}
