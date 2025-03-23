import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { DatabaseModule } from './database.module';
import { TypeOrmModule } from '@nestjs/typeorm';

/**
 * Root module of the NestJS application.
 * Responsible for initial configuration including database connection, module imports,
 * controller registration, and provider setup.
 */
@Module({
  imports: [
    // Database connection configuration (once, centrally)
    TypeOrmModule.forRoot({
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
  controllers: [UserController], // Registers controllers that handle HTTP requests
  providers: [UserService], // Registers services containing business logic
})
export class AppModule {}
