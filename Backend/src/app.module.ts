import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({ // configure database connection
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nestjs',
      password: 'nestjs',
      database: 'nestjs',
      //entities: [User],
      synchronize: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
