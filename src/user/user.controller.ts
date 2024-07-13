import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('auth/signup')
  async signup() {
    return this.userService.signup();
  }

  @Post('auth/login')
  async login() {
    return this.userService.login();
  }
}
