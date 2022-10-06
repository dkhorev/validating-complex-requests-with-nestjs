export class OrderCreateDto {
  shop_id: string; // uuid
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
