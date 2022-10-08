import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { ValidationArguments } from 'class-validator/types/validation/ValidationArguments';
import { InsertUsersDto } from '../dto/extra/insert-users.dto';

@ValidatorConstraint({ async: true })
export class NoDiplicateUsersRule implements ValidatorConstraintInterface {
  validate(signature: string, args: ValidationArguments) {
    const data = args.object as InsertUsersDto;
    const unique = data.users
      .map((it) => Object.values(it).join(''))
      .filter(onlyUnique);

    return data.users.length === unique.length;
  }

  defaultMessage(): string {
    return 'no duplicate users';
  }
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
