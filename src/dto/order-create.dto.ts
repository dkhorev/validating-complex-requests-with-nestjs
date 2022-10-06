import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsDate,
  IsDefined,
  IsEmail,
  IsInt,
  IsNotEmptyObject,
  IsUUID,
  Validate,
  ValidateNested,
} from 'class-validator';
import { CustomerExists } from '../validation-rules/customer-exists.rule';
import { ProductIdExists } from '../validation-rules/product-id-exists.rule';
import { ProductIsAvailable } from '../validation-rules/product-is-available.rule';
import { ShopIdExistsRule } from '../validation-rules/shop-id-exists.rule';

class OrderCustomerDto {
  @IsEmail()
  @CustomerExists({ message: 'email not found' })
  email: string;
}

class OrderProductDto {
  @IsInt()
  @Validate(ProductIdExists)
  id: number;

  @IsInt()
  @Validate(ProductIsAvailable)
  quantity: number;
}

export class OrderCreateDto {
  @IsUUID()
  @Validate(ShopIdExistsRule)
  shop_id: string;

  @Type(() => Date)
  @IsDate()
  created_at: Date;

  @IsNotEmptyObject()
  @IsDefined()
  @Type(() => OrderCustomerDto)
  @ValidateNested()
  customer: OrderCustomerDto;

  @ArrayNotEmpty()
  @IsDefined()
  @Type(() => OrderProductDto)
  @ValidateNested({ each: true })
  products: OrderProductDto[];

  shipment: OrderShimpentDto;

  contacts: OrderContactDto[];
}

class OrderShimpentDto {
  type: 'Delivery' | 'Pickup';
  // if Delivery
  city?: string;
  address?: string;
  // if Pickup
  point_id?: number;
}

class OrderContactDto {
  name: string;
  phone: string;
  email?: string;
}
