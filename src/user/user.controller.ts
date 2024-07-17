import { Controller, Post , Body} from '@nestjs/common';
import { UserService } from './user.service';
import { SignupDto , LoginDto} from './dto'
import { log } from 'console';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('auth/signup')
  async signup(@Body() body : SignupDto) {
    
    log(body)
    
    return this.userService.signup()
  }

  @Post('auth/login')
  async login(@Body() body : LoginDto) {

    log(body)

    return this.userService.login();
  }
}
