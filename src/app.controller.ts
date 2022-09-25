import { Controller, Post } from '@nestjs/common';
import { UserCreateDto } from './dto/user-create.dto';
import { UserModel } from './models/user.model';
import { UserRepository } from './repositories/user.repository';

@Controller()
export class AppController {
  constructor(private readonly userRepository: UserRepository) {}

  @Post('/register')
  async register(user: UserCreateDto): Promise<UserModel> {
    return await this.userRepository.create(user);
  }
}
