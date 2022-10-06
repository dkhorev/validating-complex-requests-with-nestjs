import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { ProductRepository } from '../repositories/product.repository';

@ValidatorConstraint({ async: true })
export class ProductIdExists implements ValidatorConstraintInterface {
  constructor(private readonly productRepository: ProductRepository) {}

  validate(productId: number) {
    return this.productRepository.findById(productId).then((product) => {
      return product !== undefined;
    });
  }

  defaultMessage(): string {
    return 'product with this id does not exist';
  }
}
