import { Injectable } from '@nestjs/common';
import { smallRandomDelay } from '../helper';
import { ShopModel } from '../models/shop.model';

@Injectable()
export class ShopRepository {
  private shops: ShopModel[] = [
    {
      id: '2e5679af-6c78-4a76-a42f-06c1ef5cabf9',
    },
    {
      id: '04bce5da-361e-4eb4-9ac4-8955261dbc56',
    },
    {
      id: '47b13469-3d73-41f2-a086-14ba5846544f',
    },
  ];

  constructor() {
    console.log(new Date());
  }

  public async findById(id: string): Promise<ShopModel | undefined> {
    await smallRandomDelay();

    return this.shops.find((it) => it.id === id);
  }

  public async exists(id: string): Promise<boolean> {
    await smallRandomDelay();

    return this.shops.some((it) => it.id === id);
  }
}
