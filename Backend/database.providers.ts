import { Unit } from "./src/unit/unit.entity";
import { User } from "./src/user/user.entity";
import { Role } from "./src/role/role.entity";
import { Recipe } from "./src/recipe/recipe.entity";
import { RecipeIngredient } from "./src/recipe_ingredient/recipe_ingredient.entity";
import { DietType } from "./src/diet_type/diet_type.entity";
import { Difficulty } from "./src/difficulty/difficulty.entity";
import { Ingredient } from "./src/ingredient/ingredient.entity";
import { IngredientCategory } from "./src/ingredient_category/ingredient_category.entity";
import { IngredientNutritionalValue } from "./src/ingredient_nutritional_value/ingredient_nutritional_value.entity";
import { InstructionStep } from "./src/instruction_step/instruction_step.entity";
import { DataSource } from "typeorm";

/**
 * Provides database configuration and initializes a connection to PostgreSQL
 * using TypeORM. Defines and registers all entities required for ORM interactions.
 */
export const databaseProviders = [
  {
    provide: "DATA_SOURCE",
    useFactory: async () => {
      const dataSource = new DataSource({
        type: "postgres", // Database type
        host: "localhost", // Database host address
        port: 5432, // Database port number
        username: "nestjs", // Database username
        password: "nestjs", // Database password
        database: "nestjs", // Database name
        entities: [
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
        ], // Entities to be registered for ORM
        synchronize: true, // Automatically synchronizes entity schema to the database (useful for development only)
      });

      return dataSource.initialize(); // Initializes and returns the database connection
    },
  },
];
