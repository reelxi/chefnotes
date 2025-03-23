import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './src/user/user.entity';
import { Unit } from './src/unit/unit.entity';
import { Role } from './src/role/role.entity';
import { Recipe } from './src/recipe/recipe.entity';
import { RecipeIngredient } from './src/recipe_ingredient/recipe_ingredient.entity';
import { DietType } from './src/diet_type/diet_type.entity';
import { Difficulty } from './src/difficulty/difficulty.entity';
import { Ingredient } from './src/ingredient/ingredient.entity';
import { IngredientCategory } from './src/ingredient_category/ingredient_category.entity';
import { IngredientNutritionalValue } from './src/ingredient_nutritional_value/ingredient_nutritional_value.entity';
import { InstructionStep } from './src/instruction_step/instruction_step.entity';

/**
 * DatabaseModule encapsulates the database connection and entity registration.
 * Provides access to repositories for database interaction across the application.
 */
@Module({
  imports: [
    // Registers repositories for listed entities and makes them injectable throughout the app
    TypeOrmModule.forFeature([
      Unit,
      User,
      Role,
      Recipe,
      RecipeIngredient,
      DietType,
      Difficulty,
      Ingredient,
      IngredientCategory,
      IngredientNutritionalValue,
      InstructionStep,
    ]),
  ],
  exports: [
    // Export TypeOrmModule to make entity repositories available to other modules
    TypeOrmModule,
  ],
})
export class DatabaseModule {}
