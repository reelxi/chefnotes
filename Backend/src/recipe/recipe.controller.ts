import { Controller, Post, Get, Delete, Param, Body } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.entity';

/**
 * Controller for handling HTTP requests related to recipes.
 */
@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  /**
   * Creates a new recipe.
   */
  @Post()
  create(@Body() recipe: Recipe): Promise<Recipe> {
    return this.recipeService.create(recipe);
  }

  /**
   * Returns all recipes.
   */
  @Get()
  findAll(): Promise<Recipe[]> {
    return this.recipeService.findAll();
  }

  /**
   * Returns a recipe by ID.
   */
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Recipe> {
    return this.recipeService.findOne(id);
  }

  /**
   * Deletes a recipe by ID.
   */
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.recipeService.remove(id);
  }
}
