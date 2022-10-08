import { Body, Controller, Post } from '@nestjs/common';
import { InsertUsersDto } from './dto/extra/insert-users.dto';
import { PaymentConfirmationDto } from './dto/extra/payment-confirmation.dto';
import { SubscribeDto } from './dto/extra/subscribe.dto';
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

  @Post('/payment-confirmation')
  async paymentConfirmation(
    @Body() data: PaymentConfirmationDto,
  ): Promise<PaymentConfirmationDto> {
    return data;
  }

  @Post('/subscribe')
  async sunscribe(@Body() data: SubscribeDto): Promise<SubscribeDto> {
    return data;
  }

  @Post('/insert-users')
  async insertUsers(@Body() data: InsertUsersDto): Promise<InsertUsersDto> {
    return data;
  }
}
