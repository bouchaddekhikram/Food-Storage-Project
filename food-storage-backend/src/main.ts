import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS
  app.enableCors({
    origin: 'http://localhost:4200', // Your Angular app URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Food-Storages')
    .setDescription('The Food Storage API provides endpoints to manage food items in a storage system. Users can perform CRUD (Create, Read, Update, Delete) operations on food items, including adding new items, retrieving existing items, updating item information, and removing items from storage.')
    .setVersion('1.3')
    .addTag('food-storages')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
