import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Recipe } from '../recipe/recipe.entity';

/**
 * Entity representing a single instruction step in a recipe.
 */
@Entity()
export class InstructionStep {
  /**
   * Unique identifier for the instruction step (UUID).
   */
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  /**
   * The position of the step within the full instruction list (e.g., 1, 2, 3).
   */
  @Column()
  stepCount: number;

  /**
   * The instruction text for this step.
   */
  @Column()
  instruction: string;

  /**
   * The recipe this instruction step belongs to.
   */
  @ManyToOne(() => Recipe)
  recipe: Recipe;
}
