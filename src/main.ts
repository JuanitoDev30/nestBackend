import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
//El main es el punto de entrada de la aplicación. Aquí se crea una instancia de la aplicación y se la pone a escuchar en un puerto.
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Solo deja pasar las propiedades que estén definidas en el DTO
      forbidNonWhitelisted: true, // Si se envía una propiedad que no está definida en el DTO, se lanza un error
      // transform: true,  // Transforma los tipos de datos a los que se especifican en el DTO
    }),
  );

  await app.listen(3000);
}
bootstrap();
