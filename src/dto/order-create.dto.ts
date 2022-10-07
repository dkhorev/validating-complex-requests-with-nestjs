import { Type } from 'class-transformer';
import { TypeHelpOptions } from 'class-transformer/types/interfaces';
import {
  ArrayNotEmpty,
  Equals,
  IsDate,
  IsDefined,
  IsEmail,
  IsInt,
  IsMobilePhone,
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsString,
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

enum DeliveryTypes {
  DELIVERY = 'Delivery',
  PICKUP = 'Pickup',
}

class DeliveryShipmentDto {
  @Equals(DeliveryTypes.DELIVERY)
  type: DeliveryTypes.DELIVERY;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  address: string;
}

class PickupShipmentDto {
  @Equals(DeliveryTypes.PICKUP)
  type: DeliveryTypes.PICKUP;

  @IsInt()
  point_id?: number;
}

class OrderContactDto {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  name: string;

  @IsMobilePhone('en-US')
  phone: string;

  @IsOptional()
  @IsEmail()
  email?: string;
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

  @IsNotEmptyObject()
  @IsDefined()
  @Type((data: TypeHelpOptions) => {
    switch (data.object.shipment.type) {
      case DeliveryTypes.DELIVERY:
        return DeliveryShipmentDto;
      case DeliveryTypes.PICKUP:
        return PickupShipmentDto;
    }
  })
  @ValidateNested()
  shipment: DeliveryShipmentDto | PickupShipmentDto;

  @Type(() => OrderContactDto)
  @ValidateNested({ each: true })
  contacts: OrderContactDto[];
}
