import { Injectable } from '@nestjs/common';
import { UserCreateDto } from '../dto/user-create.dto';
import { smallRandomDelay } from '../helper';
import { UserModel } from '../models/user.model';

@Injectable()
export class UserRepository {
  private users: UserModel[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      shop_id: 1,
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      shop_id: 1,
    },
    {
      id: 3,
      name: 'Bob Doe',
      email: 'bob.doe@example.com',
      shop_id: 1,
    },
  ];

  public async findByEmail(email: string): Promise<UserModel | undefined> {
    await smallRandomDelay();

    return this.users.find((it) => it.email === email);
  }

  public async create(user: UserCreateDto): Promise<UserModel> {
    // TODO check if exists already

    const id = this.users.length + 1;
    const created = {
      id,
      name: user.name,
      email: user.email,
      shop_id: user.shop_id,
    };
    this.users.push(created);

    await smallRandomDelay();

    return this.findUserById(id);
  }

  private findUserById(id: number): UserModel {
    return this.users.find((it) => it.id === id);
  }
}
