import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IngredientCategory } from './ingredient_category.entity';

/**
 * Service handling logic for ingredient categories.
 */
@Injectable()
export class IngredientCategoryService {
  constructor(
    @InjectRepository(IngredientCategory)
    private readonly ingredientCategoryRepository: Repository<IngredientCategory>,
  ) {}

  /**
   * Creates and saves a new ingredient category.
   */
  async create(category: IngredientCategory): Promise<IngredientCategory> {
    return this.ingredientCategoryRepository.save(category);
  }

  /**
   * Retrieves all ingredient categories.
   */
  async findAll(): Promise<IngredientCategory[]> {
    return this.ingredientCategoryRepository.find();
  }

  /**
   * Retrieves a single ingredient category by ID.
   */
  async findOne(id: string): Promise<IngredientCategory> {
    return this.ingredientCategoryRepository.findOneBy({ id });
  }

  /**
   * Deletes an ingredient category by ID.
   */
  async remove(id: string): Promise<void> {
    await this.ingredientCategoryRepository.delete(id);
  }
}
