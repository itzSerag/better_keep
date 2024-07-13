import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async signup() {
    return 'hello from user service -- signup';
  }

  async login() {
    return 'hello from user service -- login';
  }
}
