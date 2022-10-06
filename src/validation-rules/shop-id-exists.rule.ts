import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { ShopRepository } from '../repositories/shop.repository';

@ValidatorConstraint({ async: true })
export class ShopIdExistsRule implements ValidatorConstraintInterface {
  constructor(private readonly shopRepository: ShopRepository) {}

  validate(shopId: string) {
    return this.shopRepository.findById(shopId).then((shop) => {
      return shop !== undefined;
    });
  }

  defaultMessage(): string {
    return 'shop with this id does not exist';
  }
}
