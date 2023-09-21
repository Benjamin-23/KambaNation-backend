import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Entity } from 'typeorm';

@Entity()
export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
export class SignInDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
