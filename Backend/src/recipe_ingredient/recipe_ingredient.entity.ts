import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Unit } from '../unit/unit.entity';
import { Recipe } from '../recipe/recipe.entity';
import { Ingredient } from '../ingredient/ingredient.entity';

/**
 * Entity representing the relationship between a recipe and an ingredient,
 * including amount and unit of measurement.
 */
@Entity()
export class RecipeIngredient {
  /**
   * Auto-incrementing primary key for the recipe-ingredient relation.
   */
  @PrimaryGeneratedColumn()
  id?: number;

  /**
   * The recipe that uses this ingredient.
   */
  @ManyToOne(() => Recipe)
  recipe: Recipe;

  /**
   * The ingredient being used in the recipe.
   */
  @ManyToOne(() => Ingredient)
  ingredient: Ingredient;

  /**
   * Amount of the ingredient required in the recipe.
   */
  @Column()
  amount: number;

  /**
   * Unit of measurement for the amount.
   */
  @ManyToOne(() => Unit)
  unit: Unit;
}
