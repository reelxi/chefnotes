import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { Unit } from './unit/unit.entity';
import { Role } from './role/role.entity';
import { Recipe } from './recipe/recipe.entity';
import { RecipeIngredient } from './recipe_ingredient/recipe_ingredient.entity';
import { DietType } from './diet_type/diet_type.entity';
import { Difficulty } from './difficulty/difficulty.entity';
import { Ingredient } from './ingredient/ingredient.entity';
import { IngredientCategory } from './ingredient_category/ingredient_category.entity';
import { IngredientNutritionalValue } from './ingredient_nutritional_value/ingredient_nutritional_value.entity';
import { InstructionStep } from './instruction_step/instruction_step.entity';

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
