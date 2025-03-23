import { Controller, Post, Get, Delete, Param, Body } from '@nestjs/common';
import { RecipeIngredientService } from './recipe_ingredient.service';
import { RecipeIngredient } from './recipe_ingredient.entity';

/**
 * Controller for managing recipe-ingredient relationships.
 */
@Controller('recipe-ingredient')
export class RecipeIngredientController {
  constructor(
    private readonly recipeIngredientService: RecipeIngredientService,
  ) {}

  /**
   * Creates a new recipe-ingredient relationship.
   */
  @Post()
  create(@Body() data: RecipeIngredient): Promise<RecipeIngredient> {
    return this.recipeIngredientService.create(data);
  }

  /**
   * Retrieves all recipe-ingredient entries.
   */
  @Get()
  findAll(): Promise<RecipeIngredient[]> {
    return this.recipeIngredientService.findAll();
  }

  /**
   * Retrieves a specific recipe-ingredient entry by ID.
   */
  @Get(':id')
  findOne(@Param('id') id: number): Promise<RecipeIngredient> {
    return this.recipeIngredientService.findOne(id);
  }

  /**
   * Deletes a recipe-ingredient entry by ID.
   */
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.recipeIngredientService.remove(id);
  }
}
