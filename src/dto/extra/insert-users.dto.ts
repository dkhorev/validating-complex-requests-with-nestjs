import { Type } from 'class-transformer';
import { IsDefined, Validate, ValidateNested } from 'class-validator';
import { NoDiplicateUsersRule } from '../../validation-rules/no-diplicate-users.rule';

class NewUserDto {
  @IsDefined()
  user_id: number;

  @IsDefined()
  email: string;
}

export class InsertUsersDto {
  @Type(() => NewUserDto)
  @ValidateNested({ each: true })
  @Validate(NoDiplicateUsersRule)
  users: NewUserDto[];
}
