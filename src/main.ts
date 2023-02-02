import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())


  const options = new DocumentBuilder().setTitle('SuperFlight API')
  .setDescription('Schedule flights app')
  .setVersion('1.0.0')
  .build()

  const document = SwaggerModule.createDocument(app, options)

  SwaggerModule.setup('/api/docs', app, document, {
    swaggerOptions:{
      filter:true
    }
  })

  await app.listen(3000);
}
bootstrap();
