import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import logger from './common/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.EXPORT_PORT || 3000);
  logger.info(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
