import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { ValidationArguments } from 'class-validator/types/validation/ValidationArguments';

@ValidatorConstraint({ async: true })
export class EndLaterThanStartRule implements ValidatorConstraintInterface {
  validate(date: Date, args: ValidationArguments) {
    return date > args.object['start'];
  }

  defaultMessage(): string {
    return 'end date should be later than start date';
  }
}
