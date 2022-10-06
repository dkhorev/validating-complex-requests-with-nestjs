import { Injectable } from '@nestjs/common';
import { smallRandomDelay } from '../helper';
import { ProductModel } from '../models/product.model';

@Injectable()
export class ProductRepository {
  private items: ProductModel[] = [
    {
      id: 100,
      quantity: 10,
    },
    {
      id: 200,
      quantity: 5,
    },
  ];

  public async findById(id: number): Promise<ProductModel | undefined> {
    await smallRandomDelay();

    return this.items.find((it) => it.id === id);
  }

  public async exists(id: number): Promise<boolean> {
    await smallRandomDelay();

    return this.items.some((it) => it.id === id);
  }
}
