import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { Recipe } from './recipe/recipe.entity';
import { Role } from './role/role.entity';
import { DietType } from './diet_type/diet_type.entity';
import { Difficulty } from './difficulty/difficulty.entity';
import { IngredientCategory } from './ingredient_category/ingredient_category.entity';
import { Unit } from './unit/unit.entity';
import { IngredientNutritionalValue } from './ingredient_nutritional_value/ingredient_nutritional_value.entity';
import { Ingredient } from './ingredient/ingredient.entity';
import { InstructionStep } from './instruction_step/instruction_step.entity';
import { RecipeIngredient } from './recipe_ingredient/recipe_ingredient.entity';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // configure database connection
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nestjs',
      password: 'nestjs',
      database: 'nestjs',
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
      ],
      synchronize: true,
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
