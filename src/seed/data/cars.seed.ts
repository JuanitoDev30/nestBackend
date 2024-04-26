import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';
export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Mercedes',
    model: 'Amg Cla45s',
  },
  {
    id: uuid(),
    brand: 'BMW',
    model: 'M5',
  },
  {
    id: uuid(),
    brand: 'Audi',
    model: 'RS6',
  },
];
