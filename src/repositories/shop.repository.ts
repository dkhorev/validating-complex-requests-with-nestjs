import { Injectable } from '@nestjs/common';
import { smallRandomDelay } from '../helper';
import { ShopModel } from '../models/shop.model';

@Injectable()
export class ShopRepository {
  private shops: ShopModel[] = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];

  public async findById(id: number): Promise<ShopModel | undefined> {
    await smallRandomDelay();

    return this.shops.find((it) => it.id === id);
  }

  public async exists(id: number): Promise<boolean> {
    await smallRandomDelay();

    return this.shops.some((it) => it.id === id);
  }
}
