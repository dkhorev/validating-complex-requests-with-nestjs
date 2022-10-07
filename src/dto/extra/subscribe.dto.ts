import { IsBoolean, IsEmail, ValidateIf } from 'class-validator';

export class SubscribeDto {
  @IsBoolean()
  subscribe: boolean;

  @IsEmail()
  @ValidateIf((o) => o.subscribe)
  email: string;
}
