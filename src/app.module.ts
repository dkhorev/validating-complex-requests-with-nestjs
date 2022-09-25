import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopRepository } from './repositories/shop.repository';
import { UserRepository } from './repositories/user.repository';
import { IsEmailNotRegistered } from './validation-rules/email-not-registered.rule';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, UserRepository, ShopRepository, IsEmailNotRegistered],
})
export class AppModule {}
