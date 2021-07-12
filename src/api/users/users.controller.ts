import { Controller, Get, HttpCode } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserDto } from './user.dto';
import { UserService } from './users.service';

@Controller()
@ApiTags('users')
export class UsersController {
  constructor(private readonly service: UserService) {}

  @Get()
  @HttpCode(200)
  async getUser(): Promise<UserDto> {
    return this.service.getUser();
  }
}
