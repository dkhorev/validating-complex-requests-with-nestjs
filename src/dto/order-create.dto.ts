import { Type } from 'class-transformer';
import { IsDate, IsUUID, Validate } from 'class-validator';
import { ShopIdExistsRule } from '../validation-rules/shop-id-exists.rule';

export class OrderCreateDto {
  @IsUUID()
  @Validate(ShopIdExistsRule)
  shop_id: string;

  @Type(() => Date)
  @IsDate()
  created_at: Date;

  customer: OrderCustomerDto;

  products: OrderProductDto[];

  shipment: OrderShimpentDto;

  contacts: OrderContactDto[];
}

class OrderCustomerDto {
  id: number;
}

class OrderProductDto {
  id: number;
  name: string;
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
