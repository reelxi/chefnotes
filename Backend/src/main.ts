import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule); // chosen platform Express
  await app.listen(3000); // configure application server to listen for request on port 3000
  const serverUrl: string = await app.getUrl(); // get the full server url
  console.log('The Server listens on', serverUrl); // display full server url
}
bootstrap().then(); // execute the previous declared application server boot process
