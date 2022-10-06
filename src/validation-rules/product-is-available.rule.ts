import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { ValidationArguments } from 'class-validator/types/validation/ValidationArguments';
import { ProductRepository } from '../repositories/product.repository';

@ValidatorConstraint({ async: true })
export class ProductIsAvailable implements ValidatorConstraintInterface {
  constructor(private readonly productRepository: ProductRepository) {}

  validate(quantity: number, args: ValidationArguments) {
    const productId = args.object['id'];

    return this.productRepository.findById(productId).then((product) => {
      return product && product.quantity >= quantity;
    });
  }

  defaultMessage(): string {
    return 'product is out of stock';
  }
}
