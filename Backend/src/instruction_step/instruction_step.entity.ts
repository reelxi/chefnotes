import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
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
