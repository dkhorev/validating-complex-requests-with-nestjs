import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductRepository } from './repositories/product.repository';
import { ShopRepository } from './repositories/shop.repository';
import { UserRepository } from './repositories/user.repository';
import { IsCustomerExists } from './validation-rules/customer-exists.rule';
import { IsEmailNotRegistered } from './validation-rules/email-not-registered.rule';
import { NoDiplicateUsersRule } from './validation-rules/no-diplicate-users.rule';
import { ProductIdExists } from './validation-rules/product-id-exists.rule';
import { ProductIsAvailable } from './validation-rules/product-is-available.rule';
import { ShopIdExistsRule } from './validation-rules/shop-id-exists.rule';
import { SignatureIsValidRule } from './validation-rules/signature-is-valid.rule';

@Module({
  imports: [ConfigModule.forRoot()],
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
    SignatureIsValidRule,
    NoDiplicateUsersRule,
  ],
})
export class AppModule {}
