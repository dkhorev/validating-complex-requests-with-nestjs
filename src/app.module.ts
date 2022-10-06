import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopRepository } from './repositories/shop.repository';
import { UserRepository } from './repositories/user.repository';
import { IsCustomerExists } from './validation-rules/customer-exists.rule';
import { IsEmailNotRegistered } from './validation-rules/email-not-registered.rule';
import { ShopIdExistsRule } from './validation-rules/shop-id-exists.rule';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    UserRepository,
    ShopRepository,
    IsEmailNotRegistered,
    ShopIdExistsRule,
    IsCustomerExists,
  ],
})
export class AppModule {}
