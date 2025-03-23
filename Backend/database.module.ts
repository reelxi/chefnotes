import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

/**
 * DatabaseModule encapsulates the database connection logic and provides
 * access to the configured DataSource throughout the application.
 */
@Module({
  providers: [...databaseProviders], // Registers database providers for dependency injection
  exports: [...databaseProviders], // Makes database providers available to other modules
})
export class DatabaseModule {}
