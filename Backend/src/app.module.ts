import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { DatabaseModule } from './database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleController } from './role/role.controller';
import { UnitController } from './unit/unit.controller';
import { RecipeController } from './recipe/recipe.controller';
import { RecipeIngredientController } from './recipe_ingredient/recipe_ingredient.controller';
import { DietTypeController } from './diet_type/diet_type.controller';
import { DifficultyController } from './difficulty/difficulty.controller';
import { IngredientController } from './ingredient/ingredient.controller';
import { IngredientCategoryController } from './ingredient_category/ingredient_category.controller';
import { IngredientNutritionalValueController } from './ingredient_nutritional_value/ingredient_nutritional_value.controller';
import { InstructionStepController } from './instruction_step/instruction_step.controller';
import { UnitService } from './unit/unit.service';
import { RoleService } from './role/role.service';
import { RecipeService } from './recipe/recipe.service';
import { RecipeIngredientService } from './recipe_ingredient/recipe_ingredient.service';
import { DietTypeService } from './diet_type/diet_type.service';
import { DifficultyService } from './difficulty/difficulty.service';
import { IngredientService } from './ingredient/ingredient.service';
import { IngredientCategoryService } from './ingredient_category/ingredient_category.service';
import { IngredientNutritionalValueService } from './ingredient_nutritional_value/ingredient_nutritional_value.service';
import { InstructionStepService } from './instruction_step/instruction_step.service';

/**
 * Root module of the NestJS application.
 * Responsible for initial configuration including database connection, module imports,
 * controller registration, and provider setup.
 */
@Module({
  imports: [
    // Database connection configuration (once, centrally)
    TypeOrmModule.forRoot({
      url: process.env.DB_URL,
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nestjs',
      password: 'nestjs',
      database: 'nestjs',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // only for development!
    }),
    DatabaseModule, // Includes entities and repositories
  ],
  controllers: [
    UserController,
    UnitController,
    RoleController,
    RecipeController,
    RecipeIngredientController,
    DietTypeController,
    DifficultyController,
    IngredientController,
    IngredientCategoryController,
    IngredientNutritionalValueController,
    InstructionStepController,
  ], // Registers controllers that handle HTTP requests
  providers: [
    UserService,
    UnitService,
    RoleService,
    RecipeService,
    RecipeIngredientService,
    DietTypeService,
    DifficultyService,
    IngredientService,
    IngredientCategoryService,
    IngredientNutritionalValueService,
    InstructionStepService,
  ], // Registers services containing business logic
})
export class AppModule {}
