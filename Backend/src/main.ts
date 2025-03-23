import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

/**
 * Main entry point of the NestJS application.
 * Responsible for creating and initializing the NestJS application instance.
 */
async function bootstrap() {
  /**
   * Creates a new NestJS application instance based on the root module (AppModule).
   * Initializes the entire application, including all associated modules,
   * controllers, providers, middleware, interceptors, and pipes.
   * Explicitly uses Express as underlying HTTP platform.
   */
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  /**
   * Starts the HTTP server and listens for incoming requests on the specified port (default: 3000).
   */
  await app.listen(3000);

  /**
   * After the server has successfully started, retrieves the full URL
   * (e.g., http://localhost:3000) to confirm that the server is running correctly.
   */
  const serverUrl: string = await app.getUrl();

  /**
   * Logs the server URL to the console, providing an easy reference for access.
   */
  console.log(`The server is running at ${serverUrl}`);
}

/**
 * Executes the bootstrap function, which performs the steps outlined above
 * to create and start the NestJS application.
 * Includes error handling to catch initialization errors.
 */
bootstrap().catch((error) => {
  console.error('Error starting the server:', error);
  process.exit(1);
});
