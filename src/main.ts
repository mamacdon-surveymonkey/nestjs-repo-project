import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // setup swagger module
  const options = new DocumentBuilder()
    .setTitle('My App')
    .setDescription('My APIs')
    .setVersion('1.0.0')
    .build();
  const docs = SwaggerModule.createDocument(app, options, {});
  SwaggerModule.setup('docs', app, docs);

  await app.listen(3000);
}
bootstrap();
