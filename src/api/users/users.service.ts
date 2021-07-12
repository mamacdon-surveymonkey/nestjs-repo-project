import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  async getUser(): Promise<UserDto> {
    return {} as UserDto;
  }
}
