// ESLint Configuration File

/**
 * This ESLint configuration file sets up code-quality (Linting) and formatting (Prettier) rules
 * specifically tailored for a TypeScript project. It ensures consistent code quality, helps detect potential
 * issues early, and maintains uniform formatting across the codebase.
 */
module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser for TypeScript files
  parserOptions: {
    project: 'tsconfig.json', // Defines the location of the TypeScript configuration
    tsconfigRootDir: __dirname, // Root directory containing the tsconfig file
    sourceType: 'module', // Specifies ECMAScript module syntax
  },
  plugins: ['@typescript-eslint/eslint-plugin'], // Enables TypeScript-specific linting rules
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses recommended TypeScript ESLint rules
    'plugin:prettier/recommended', // Integrates ESLint with Prettier for automatic formatting
  ],
  root: true, // Indicates that this is the root ESLint configuration
  env: {
    node: true, // Sets Node.js global variables and scope
    jest: true, // Adds Jest testing globals
  },
  ignorePatterns: ['.eslintrc.js'], // Prevents ESLint from linting its own configuration file
  rules: {
    // Customizes or overrides specific ESLint rules for this project
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    // Prettier-specific rule adjustments
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto', // Allows compatibility with different operating systems
      },
    ],
  },
};
