import { IsNotEmpty, IsNumber, IsString, Validate } from 'class-validator';
import { SignatureIsValidRule } from '../../validation-rules/signature-is-valid.rule';

export class PaymentConfirmationDto {
  @IsNotEmpty()
  @IsNumber()
  order_id: number;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsString()
  @Validate(SignatureIsValidRule)
  signature: string;
}
