import { IsEmail, IsString, MinLength } from 'class-validator';
import { EmailNotRegistered } from '../validation-rules/email-not-registered.rule';

export class UserCreateDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsEmail()
  @EmailNotRegistered({ message: 'email already registered' })
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}
