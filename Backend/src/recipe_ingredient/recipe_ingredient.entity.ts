import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Unit } from '../unit/unit.entity';
import { Recipe } from '../recipe/recipe.entity';
import { Ingredient } from '../ingredient/ingredient.entity';

@Entity()
export class RecipeIngredient {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne('Recipe')
  recipe: Recipe;

  @ManyToOne('Ingredient')
  ingredient: Ingredient;

  @Column()
  amount: number;

  @ManyToOne('Unit')
  unit: Unit;
}
