import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { faker } from '@faker-js/faker';
import { RoleService } from '../role/role.service';
import { UserService } from '../user/user.service';
import { DietTypeService } from '../diet_type/diet_type.service';
import { DifficultyService } from '../difficulty/difficulty.service';
import { UnitService } from '../unit/unit.service';
import { IngredientCategoryService } from '../ingredient_category/ingredient_category.service';
import { IngredientService } from '../ingredient/ingredient.service';
import { IngredientNutritionalValueService } from '../ingredient_nutritional_value/ingredient_nutritional_value.service';
import { RecipeService } from '../recipe/recipe.service';
import { InstructionStepService } from '../instruction_step/instruction_step.service';
import { RecipeIngredientService } from '../recipe_ingredient/recipe_ingredient.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const roleService = app.get(RoleService);
  const userService = app.get(UserService);
  const dietTypeService = app.get(DietTypeService);
  const difficultyService = app.get(DifficultyService);
  const unitService = app.get(UnitService);
  const categoryService = app.get(IngredientCategoryService);
  const ingValueService = app.get(IngredientNutritionalValueService);
  const ingredientService = app.get(IngredientService);
  const recipeService = app.get(RecipeService);
  const instructionStepService = app.get(InstructionStepService);
  const recipeIngredientService = app.get(RecipeIngredientService);

  // Seed roles
  const roles = ['Admin', 'User'];
  const roleEntities = await Promise.all(
    roles.map((name) => roleService.create({ name })),
  );

  // Seed users
  const users = await Promise.all(
    Array.from({ length: 5 }).map(() =>
      userService.create({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        role: faker.helpers.arrayElement(roleEntities),
      }),
    ),
  );

  // Seed diet types
  const dietTypes = ['Vegan', 'Vegetarian', 'Keto', 'Low-Carb'];
  const dietTypeEntities = await Promise.all(
    dietTypes.map((name) => dietTypeService.create({ name })),
  );

  // Seed difficulties
  const difficulties = ['Easy', 'Medium', 'Hard'];
  const difficultyEntities = await Promise.all(
    difficulties.map((name) => difficultyService.create({ name })),
  );

  // Seed units
  const units = ['g', 'ml', 'piece', 'tbsp', 'tsp'];
  const unitEntities = await Promise.all(
    units.map((name) => unitService.create({ name })),
  );

  // Seed ingredient categories
  const categories = ['Vegetable', 'Fruit', 'Meat', 'Dairy', 'Grain'];
  const categoryEntities = await Promise.all(
    categories.map((name) => categoryService.create({ name })),
  );

  // Seed ingredients with nutritional values
  const ingredients = await Promise.all(
    Array.from({ length: 10 }).map(async () => {
      const values = await ingValueService.create({
        energy: faker.number.int({ min: 10, max: 500 }),
        fat: faker.number.float({ min: 0, max: 50 }),
        saturatedFat: faker.number.float({ min: 0, max: 20 }),
        carbohydrates: faker.number.float({ min: 0, max: 100 }),
        sugar: faker.number.float({ min: 0, max: 60 }),
        protein: faker.number.float({ min: 0, max: 30 }),
        salt: faker.number.float({ min: 0, max: 10 }),
      });

      return ingredientService.create({
        name: faker.commerce.productName(),
        ingredientNutritionalValue: values,
        ingredientCategory: faker.helpers.arrayElement(categoryEntities),
      });
    }),
  );

  // Seed recipes
  for (let i = 0; i < 5; i++) {
    const recipeNutrition = await ingValueService.create({
      energy: faker.number.int({ min: 100, max: 800 }),
      fat: faker.number.float({ min: 1, max: 100 }),
      saturatedFat: faker.number.float({ min: 1, max: 40 }),
      carbohydrates: faker.number.float({ min: 1, max: 150 }),
      sugar: faker.number.float({ min: 1, max: 100 }),
      protein: faker.number.float({ min: 1, max: 80 }),
      salt: faker.number.float({ min: 0.1, max: 5 }),
    });

    const recipe = await recipeService.create({
      title: faker.commerce.productName(),
      estimatedTimeMinutes: faker.number.int({ min: 10, max: 90 }),
      dietType: faker.helpers.arrayElement(dietTypeEntities),
      difficulty: faker.helpers.arrayElement(difficultyEntities),
      user: faker.helpers.arrayElement(users),
      recipeNutritionalValue: recipeNutrition,
    });

    // Instruction steps
    const stepCount = faker.number.int({ min: 2, max: 5 });
    for (let step = 1; step <= stepCount; step++) {
      await instructionStepService.create({
        stepCount: step,
        instruction: faker.lorem.sentence(),
        recipe,
      });
    }

    // Recipe ingredients
    for (let j = 0; j < 3; j++) {
      await recipeIngredientService.create({
        recipe,
        ingredient: faker.helpers.arrayElement(ingredients),
        amount: faker.number.float({ min: 10, max: 500 }),
        unit: faker.helpers.arrayElement(unitEntities),
      });
    }
  }

  console.log('✅ Faker seed completed successfully!');
  await app.close();
}

bootstrap();
