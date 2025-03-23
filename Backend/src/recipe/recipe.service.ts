import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recipe } from './recipe.entity';

/**
 * Provides methods to manage recipe entities.
 */
@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(Recipe)
    private readonly recipeRepository: Repository<Recipe>,
  ) {}

  /**
   * Creates and saves a new recipe in the database.
   */
  async create(recipe: Recipe): Promise<Recipe> {
    return this.recipeRepository.save(recipe);
  }

  /**
   * Retrieves all recipes.
   */
  async findAll(): Promise<Recipe[]> {
    return this.recipeRepository.find({
      relations: ['user', 'difficulty', 'dietType', 'recipeNutritionalValue'],
    });
  }

  /**
   * Retrieves a single recipe by ID.
   */
  async findOne(id: string): Promise<Recipe> {
    return this.recipeRepository.findOne({
      where: { id },
      relations: ['user', 'difficulty', 'dietType', 'recipeNutritionalValue'],
    });
  }

  /**
   * Deletes a recipe by ID.
   */
  async remove(id: string): Promise<void> {
    await this.recipeRepository.delete(id);
  }
}
