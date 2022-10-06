import { Body, Controller, Post } from '@nestjs/common';
import { OrderCreateDto } from './dto/order-create.dto';
import { UserCreateDto } from './dto/user-create.dto';
import { UserModel } from './models/user.model';
import { UserRepository } from './repositories/user.repository';

@Controller()
export class AppController {
  constructor(private readonly userRepository: UserRepository) {}

  @Post('/register')
  async register(@Body() user: UserCreateDto): Promise<UserModel> {
    return await this.userRepository.create(user);
  }

  @Post('/order')
  async order(@Body() order: OrderCreateDto): Promise<OrderCreateDto> {
    return order;
  }
}
