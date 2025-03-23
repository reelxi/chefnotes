import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

/**
 * End-to-End (E2E) tests for the NestJS AppController.
 * These tests verify the basic HTTP endpoints of the application.
 */
describe('AppController (e2e)', () => {
  let app: INestApplication;

  /**
   * Before each test, initialize a new NestJS application instance based on the AppModule.
   */
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  /**
   * Test the root (/) endpoint to ensure it returns a status code of 200 and the correct message.
   */
  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
