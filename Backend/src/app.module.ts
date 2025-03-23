import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { DatabaseModule } from '../database.module';

/**
 * Root module of the NestJS application.
 * Responsible for configuring and initializing the main aspects of the application,
 * including importing other modules, registering controllers, and providers.
 */
@Module({
  imports: [DatabaseModule], // Imports additional modules needed by the application
  controllers: [UserController], // Registers controllers that handle HTTP requests
  providers: [UserService], // Registers services containing business logic
})
export class AppModule {}
