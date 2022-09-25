import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';
import { EmailNotRegistered } from '../validation-rules/email-not-registered.rule';

export class UserCreateDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  @EmailNotRegistered({ message: 'Email already registered' })
  email: string;

  @IsNumber()
  // @ShopIdExists()
  shop_id: number;

  @IsString()
  @MinLength(8)
  password: string;
}
