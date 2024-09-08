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

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @OneToOne('IngredientNutritionalValue')
  @JoinColumn()
  ingredientNutritionalValue: IngredientNutritionalValue;

  @ManyToOne('IngredientCategory')
  ingredientCategory: IngredientCategory;
}
