import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IngredientNutritionalValue } from './ingredient_nutritional_value.entity';

/**
 * Service for managing nutritional value records.
 */
@Injectable()
export class IngredientNutritionalValueService {
  constructor(
    @InjectRepository(IngredientNutritionalValue)
    private readonly repository: Repository<IngredientNutritionalValue>,
  ) {}

  /**
   * Creates and saves a new nutritional value entry.
   */
  async create(
    data: IngredientNutritionalValue,
  ): Promise<IngredientNutritionalValue> {
    return this.repository.save(data);
  }

  /**
   * Retrieves all nutritional value records.
   */
  async findAll(): Promise<IngredientNutritionalValue[]> {
    return this.repository.find();
  }

  /**
   * Retrieves a nutritional value entry by ID.
   */
  async findOne(id: string): Promise<IngredientNutritionalValue> {
    return this.repository.findOneBy({ id });
  }

  /**
   * Deletes a nutritional value entry by ID.
   */
  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
