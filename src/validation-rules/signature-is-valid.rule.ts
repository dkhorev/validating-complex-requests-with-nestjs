import { ConfigService } from '@nestjs/config';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { ValidationArguments } from 'class-validator/types/validation/ValidationArguments';
import { createHash } from 'crypto';
import { PaymentConfirmationDto } from '../dto/extra/payment-confirmation.dto';

@ValidatorConstraint({ async: true })
export class SignatureIsValidRule implements ValidatorConstraintInterface {
  private readonly secret: string;

  constructor(private readonly config: ConfigService) {
    this.secret = config.get('SECRET') ?? 'secret';
  }

  validate(signature: string, args: ValidationArguments) {
    const data = args.object as PaymentConfirmationDto;

    const hash = createHash('sha256')
      .update(data.order_id + data.amount + this.secret)
      .digest('hex');

    return hash === signature;
  }

  defaultMessage(): string {
    return 'signature is invalid';
  }
}
