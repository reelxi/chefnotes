import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Entity representing the nutritional values of an ingredient or recipe.
 * Values are typically per 100g or per portion.
 */
@Entity()
export class IngredientNutritionalValue {
  /**
   * Unique identifier for the nutritional value record (UUID).
   */
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Energy content in kilocalories (kcal).
   */
  @Column()
  energy: number;

  /**
   * Total fat in grams.
   */
  @Column()
  fat: number;

  /**
   * Saturated fat in grams.
   */
  @Column()
  saturatedFat: number;

  /**
   * Carbohydrates in grams.
   */
  @Column()
  carbohydrates: number;

  /**
   * Sugar in grams.
   */
  @Column()
  sugar: number;

  /**
   * Protein content in grams.
   */
  @Column()
  protein: number;

  /**
   * Salt content in grams.
   */
  @Column()
  salt: number;
}
