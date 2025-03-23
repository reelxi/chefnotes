import { Controller, Post, Get, Delete, Param, Body } from '@nestjs/common';
import { IngredientNutritionalValueService } from './ingredient_nutritional_value.service';
import { IngredientNutritionalValue } from './ingredient_nutritional_value.entity';

/**
 * Controller for managing nutritional value data via HTTP requests.
 */
@Controller('nutritional-value')
export class IngredientNutritionalValueController {
  constructor(private readonly service: IngredientNutritionalValueService) {}

  /**
   * Creates a new nutritional value entry.
   */
  @Post()
  create(
    @Body() data: IngredientNutritionalValue,
  ): Promise<IngredientNutritionalValue> {
    return this.service.create(data);
  }

  /**
   * Retrieves all nutritional value entries.
   */
  @Get()
  findAll(): Promise<IngredientNutritionalValue[]> {
    return this.service.findAll();
  }

  /**
   * Retrieves a nutritional value entry by ID.
   */
  @Get(':id')
  findOne(@Param('id') id: string): Promise<IngredientNutritionalValue> {
    return this.service.findOne(id);
  }

  /**
   * Deletes a nutritional value entry by ID.
   */
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.service.remove(id);
  }
}
