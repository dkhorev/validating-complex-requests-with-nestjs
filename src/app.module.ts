import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductRepository } from './repositories/product.repository';
import { ShopRepository } from './repositories/shop.repository';
import { UserRepository } from './repositories/user.repository';
import { IsCustomerExists } from './validation-rules/customer-exists.rule';
import { IsEmailNotRegistered } from './validation-rules/email-not-registered.rule';
import { ProductIdExists } from './validation-rules/product-id-exists.rule';
import { ProductIsAvailable } from './validation-rules/product-is-available.rule';
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
    ProductRepository,
    ProductIdExists,
    ProductIsAvailable,
  ],
})
export class AppModule {}
