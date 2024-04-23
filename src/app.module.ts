import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';

//Los modulos son clases decoradas con @Module() que definen un contexto de ejecución de la aplicación.
@Module({
  imports: [CarsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
