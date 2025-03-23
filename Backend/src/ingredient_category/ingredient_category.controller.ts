import { Controller, Post, Get, Delete, Param, Body } from '@nestjs/common';
import { IngredientCategoryService } from './ingredient_category.service';
import { IngredientCategory } from './ingredient_category.entity';

/**
 * Controller for managing ingredient category-related HTTP requests.
 */
@Controller('ingredient-category')
export class IngredientCategoryController {
  constructor(
    private readonly ingredientCategoryService: IngredientCategoryService,
  ) {}

  /**
   * Creates a new ingredient category.
   */
  @Post()
  create(@Body() category: IngredientCategory): Promise<IngredientCategory> {
    return this.ingredientCategoryService.create(category);
  }

  /**
   * Retrieves all ingredient categories.
   */
  @Get()
  findAll(): Promise<IngredientCategory[]> {
    return this.ingredientCategoryService.findAll();
  }

  /**
   * Retrieves an ingredient category by ID.
   */
  @Get(':id')
  findOne(@Param('id') id: string): Promise<IngredientCategory> {
    return this.ingredientCategoryService.findOne(id);
  }

  /**
   * Deletes an ingredient category by ID.
   */
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.ingredientCategoryService.remove(id);
  }
}
