import {
  Column,
  Entity,
  Generated,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Recipe } from '../recipe/recipe.entity';

@Entity()
export class InstructionStep {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  stepCount: number;

  @Column()
  instruction: string;

  @ManyToOne('Recipe')
  recipe: Recipe;
}
