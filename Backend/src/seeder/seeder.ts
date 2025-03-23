import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { faker } from '@faker-js/faker';

// Service imports
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

/**
 * Utility function to ensure unique entity creation based on the "name" property.
 * If an entity with the given name already exists, it is returned instead.
 *
 * @template T - The entity type (must contain a "name" property).
 * @param service - Service with findAll() and create() methods.
 * @param name - The unique name to check and potentially create.
 * @returns The existing or newly created entity.
 */
async function createIfNotExistsByName<T extends { name: string }>(
  service: {
    findAll: () => Promise<T[]>;
    create: (data: any) => Promise<T>;
  },
  name: string,
): Promise<T> {
  const all = await service.findAll();
  const existing = all.find((e) => e.name === name);
  return existing ?? (await service.create({ name }));
}

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  // Resolve all required services
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

  /**
   * Seed static base data (with uniqueness ensured)
   */
  const roles = await Promise.all([
    createIfNotExistsByName(roleService, 'Admin'),
    createIfNotExistsByName(roleService, 'User'),
  ]);

  const dietTypes = await Promise.all(
    ['Vegan', 'Vegetarian', 'Keto', 'Low-Carb'].map((name) =>
      createIfNotExistsByName(dietTypeService, name),
    ),
  );

  const difficulties = await Promise.all(
    ['Easy', 'Medium', 'Hard'].map((name) =>
      createIfNotExistsByName(difficultyService, name),
    ),
  );

  const units = await Promise.all(
    ['g', 'ml', 'piece', 'tbsp', 'tsp'].map((name) =>
      createIfNotExistsByName(unitService, name),
    ),
  );

  const categories = await Promise.all(
    ['Vegetable', 'Fruit', 'Meat', 'Dairy', 'Grain'].map((name) =>
      createIfNotExistsByName(categoryService, name),
    ),
  );

  /**
   * Generate dynamic data for users, ingredients and recipes
   */

  // Users
  const users = await Promise.all(
    Array.from({ length: 5 }).map(() =>
      userService.create({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        role: faker.helpers.arrayElement(roles),
      }),
    ),
  );

  // Ingredients with nutritional values
  const ingredients = await Promise.all(
    Array.from({ length: 10 }).map(async () => {
      const nutrition = await ingValueService.create({
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
        ingredientCategory: faker.helpers.arrayElement(categories),
        ingredientNutritionalValue: nutrition,
      });
    }),
  );

  // Recipes with instruction steps and recipe ingredients
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
      dietType: faker.helpers.arrayElement(dietTypes),
      difficulty: faker.helpers.arrayElement(difficulties),
      user: faker.helpers.arrayElement(users),
      recipeNutritionalValue: recipeNutrition,
    });

    // Instruction steps for recipe
    for (let step = 1; step <= faker.number.int({ min: 2, max: 5 }); step++) {
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
        unit: faker.helpers.arrayElement(units),
      });
    }
  }

  console.log('✅ Added fake data');

  // Hardcoded real recipe: Spaghetti Bolognese 🍝
  const realNutrition = await ingValueService.create({
    energy: 600,
    fat: 20,
    saturatedFat: 7,
    carbohydrates: 70,
    sugar: 10,
    protein: 25,
    salt: 1.5,
  });

  const realRecipe = await recipeService.create({
    title: 'Spaghetti Bolognese',
    estimatedTimeMinutes: 45,
    dietType: dietTypes.find((d) => d.name === 'Low-Carb') ?? dietTypes[0],
    difficulty:
      difficulties.find((d) => d.name === 'Medium') ?? difficulties[0],
    user: users[0],
    recipeNutritionalValue: realNutrition,
  });

  // Steps
  const bologneseSteps = [
    'Heat olive oil in a pan and sauté onions and garlic.',
    'Add minced beef and fry until browned.',
    'Stir in tomato paste, diced tomatoes, salt, pepper and herbs.',
    'Let it simmer for 30 minutes.',
    'Cook spaghetti al dente and serve with the sauce.',
  ];

  await Promise.all(
    bologneseSteps.map((text, index) =>
      instructionStepService.create({
        stepCount: index + 1,
        instruction: text,
        recipe: realRecipe,
      }),
    ),
  );

  // Ingredients
  const realIngredients = [
    { name: 'Spaghetti', amount: 200 },
    { name: 'Minced Beef', amount: 300 },
    { name: 'Tomato Paste', amount: 100 },
    { name: 'Onion', amount: 1 },
    { name: 'Garlic Clove', amount: 2 },
  ];

  for (const entry of realIngredients) {
    // Check if ingredient exists or create it
    let ingredient = ingredients.find((i) => i.name === entry.name);
    if (!ingredient) {
      const nutri = await ingValueService.create({
        energy: 100,
        fat: 5,
        saturatedFat: 1,
        carbohydrates: 10,
        sugar: 2,
        protein: 5,
        salt: 0.1,
      });
      ingredient = await ingredientService.create({
        name: entry.name,
        ingredientCategory: faker.helpers.arrayElement(categories),
        ingredientNutritionalValue: nutri,
      });
      ingredients.push(ingredient);
    }

    await recipeIngredientService.create({
      recipe: realRecipe,
      ingredient,
      amount: entry.amount,
      unit: units.find((u) => u.name === 'g') ?? units[0],
    });
  }

  console.log('✅ Added "real example" data');

  console.log('✅ Seeder completed successfully (idempotent & relational).');

  await app.close();
}

bootstrap();
