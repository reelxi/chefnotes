import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RecipeIngredient } from './recipe_ingredient.entity';

/**
 * Service handling logic for recipe-ingredient relationships.
 */
@Injectable()
export class RecipeIngredientService {
  constructor(
    @InjectRepository(RecipeIngredient)
    private readonly recipeIngredientRepository: Repository<RecipeIngredient>,
  ) {}

  /**
   * Creates and saves a new recipe-ingredient relationship.
   */
  async create(data: RecipeIngredient): Promise<RecipeIngredient> {
    return this.recipeIngredientRepository.save(data);
  }

  /**
   * Retrieves all recipe-ingredient entries.
   */
  async findAll(): Promise<RecipeIngredient[]> {
    return this.recipeIngredientRepository.find({
      relations: ['recipe', 'ingredient', 'unit'],
    });
  }

  /**
   * Retrieves a recipe-ingredient entry by ID.
   */
  async findOne(id: number): Promise<RecipeIngredient> {
    return this.recipeIngredientRepository.findOne({
      where: { id },
      relations: ['recipe', 'ingredient', 'unit'],
    });
  }

  /**
   * Deletes a recipe-ingredient entry by ID.
   */
  async remove(id: number): Promise<void> {
    await this.recipeIngredientRepository.delete(id);
  }
}
