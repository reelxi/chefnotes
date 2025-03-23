import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IngredientCategory } from '../ingredient_category/ingredient_category.entity';
import { IngredientNutritionalValue } from '../ingredient_nutritional_value/ingredient_nutritional_value.entity';

/**
 * Entity representing a food ingredient.
 */
@Entity()
export class Ingredient {
  /**
   * Unique identifier for the ingredient (UUID).
   */
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  /**
   * Name of the ingredient.
   */
  @Column()
  name: string;

  /**
   * Nutritional values associated with the ingredient.
   */
  @OneToOne(() => IngredientNutritionalValue)
  @JoinColumn()
  ingredientNutritionalValue: IngredientNutritionalValue;

  /**
   * Category to which the ingredient belongs.
   */
  @ManyToOne(() => IngredientCategory)
  ingredientCategory: IngredientCategory;
}
