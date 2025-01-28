import { NestFactory } from '@nestjs/core';
import { MonoAppModule } from './mono-app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(MonoAppModule);
  await app.listen(process.env.port ?? 3000);

  Logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
