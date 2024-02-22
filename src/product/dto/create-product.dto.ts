import { Type } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly color?: string;

  @IsString()
  @IsOptional()
  readonly categories?: string;

  @IsString()
  @IsOptional()
  readonly price?: string;

  @IsString()
  @IsOptional()
  readonly units?: string;

  @IsOptional()
  @Type(() => Object)
  readonly image: any;
}
