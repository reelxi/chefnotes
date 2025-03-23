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
  id?: string;

  /**
   * Energy content in kilocalories (kcal).
   */
  @Column({ type: 'int' })
  energy: number;

  /**
   * Total fat in grams.
   */
  @Column({ type: 'float' })
  fat: number;

  /**
   * Saturated fat in grams.
   */
  @Column({ type: 'float' })
  saturatedFat: number;

  /**
   * Carbohydrates in grams.
   */
  @Column({ type: 'float' })
  carbohydrates: number;

  /**
   * Sugar in grams.
   */
  @Column({ type: 'float' })
  sugar: number;

  /**
   * Protein content in grams.
   */
  @Column({ type: 'float' })
  protein: number;

  /**
   * Salt content in grams.
   */
  @Column({ type: 'float' })
  salt: number;
}
