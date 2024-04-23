import { IsString, MinLength } from 'class-validator';

export class CreateCarDto {
  @IsString()
  readonly brand: string;
  @IsString()
  @MinLength(3, { message: 'Model is too short' })
  readonly model: string;
}
