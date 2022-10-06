import { Type } from 'class-transformer';
import {
  IsDate,
  IsDefined,
  IsEmail,
  IsNotEmptyObject,
  IsUUID,
  Validate,
  ValidateNested,
} from 'class-validator';
import { CustomerExists } from '../validation-rules/customer-exists.rule';
import { ShopIdExistsRule } from '../validation-rules/shop-id-exists.rule';

class OrderCustomerDto {
  @IsEmail()
  @CustomerExists({ message: 'email not found' })
  email: string;
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

  products: OrderProductDto[];

  shipment: OrderShimpentDto;

  contacts: OrderContactDto[];
}

class OrderProductDto {
  id: number;
  name: string;
  //@IsInt()
  quantity: number;
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
