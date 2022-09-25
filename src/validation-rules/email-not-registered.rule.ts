import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UserRepository } from '../repositories/user.repository';

@ValidatorConstraint({ async: true })
export class IsEmailNotRegistered implements ValidatorConstraintInterface {
  constructor(private readonly userRepository: UserRepository) {}

  validate(userName: any) {
    return this.userRepository.findByEmail(userName).then((user) => {
      return user === undefined;
    });
  }
}

export function EmailNotRegistered(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsEmailNotRegistered,
    });
  };
}
