import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { Ingredient } from './ingredient.entity';

/**
 * Controller handling HTTP requests related to ingredients.
 */
@Controller('ingredient')
export class IngredientController {
  constructor(private readonly ingredientService: IngredientService) {}

  /**
   * Creates a new ingredient.
   */
  @Post()
  create(@Body() ingredient: Ingredient): Promise<Ingredient> {
    return this.ingredientService.create(ingredient);
  }

  /**
   * Retrieves all ingredients.
   */
  @Get()
  findAll(): Promise<Ingredient[]> {
    return this.ingredientService.findAll();
  }

  /**
   * Retrieves an ingredient by ID.
   */
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Ingredient> {
    return this.ingredientService.findOne(id);
  }

  /**
   * Deletes an ingredient by ID.
   */
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.ingredientService.remove(id);
  }
}
