import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Entity representing a category for ingredients (e.g., vegetable, fruit, dairy).
 */
@Entity()
export class IngredientCategory {
  /**
   * Unique identifier for the ingredient category (UUID).
   */
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Unique name of the ingredient category.
   */
  @Column({ unique: true })
  name: string;
}
