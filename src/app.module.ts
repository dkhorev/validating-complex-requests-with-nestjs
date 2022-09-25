import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserRepository } from './repositories/user.repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, UserRepository],
})
export class AppModule {}
