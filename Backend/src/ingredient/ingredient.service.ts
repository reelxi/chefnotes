import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ingredient } from './ingredient.entity';

/**
 * Service providing business logic for ingredient entities.
 */
@Injectable()
export class IngredientService {
  constructor(
    @InjectRepository(Ingredient)
    private readonly ingredientRepository: Repository<Ingredient>,
  ) {}

  /**
   * Creates and saves a new ingredient.
   */
  async create(ingredient: Ingredient): Promise<Ingredient> {
    return this.ingredientRepository.save(ingredient);
  }

  /**
   * Retrieves all ingredients.
   */
  async findAll(): Promise<Ingredient[]> {
    return this.ingredientRepository.find({
      relations: ['ingredientNutritionalValue', 'ingredientCategory'],
    });
  }

  /**
   * Retrieves an ingredient by ID.
   */
  async findOne(id: string): Promise<Ingredient> {
    return this.ingredientRepository.findOne({
      where: { id },
      relations: ['ingredientNutritionalValue', 'ingredientCategory'],
    });
  }

  /**
   * Deletes an ingredient by ID.
   */
  async remove(id: string): Promise<void> {
    await this.ingredientRepository.delete(id);
  }
}
