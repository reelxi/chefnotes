import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Difficulty } from '../difficulty/difficulty.entity';
import { DietType } from '../diet_type/diet_type.entity';
import { IngredientNutritionalValue } from '../ingredient_nutritional_value/ingredient_nutritional_value.entity';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ unique: true })
  title: string;

  @Column()
  estimatedTimeMinutes: number;

  @OneToOne('IngredientNutritionalValue')
  @JoinColumn()
  recipeNutritionalValue: IngredientNutritionalValue;

  @ManyToOne('DietType')
  dietType: DietType;

  @ManyToOne('Difficulty')
  difficulty: Difficulty;

  @ManyToOne('User')
  user: User;
}
