import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class IngredientNutritionalValue {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  energy: number;

  @Column()
  fat: number;

  @Column()
  saturatedFat: number;

  @Column()
  carbohydrates: number;

  @Column()
  sugar: number;

  @Column()
  protein: number;

  @Column()
  salt: number;
}
