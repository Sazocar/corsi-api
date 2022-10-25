import { Body, Controller, Post } from '@nestjs/common';
import { LoginAuthDto } from '../dto/login-auth.dto';
import { RegisterAuthDto } from '../dto/register-auth.dto';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  registerUser(@Body() userObject: RegisterAuthDto) {
    return this.authService.register(userObject)
  }

  @Post('login')
  loginUser(@Body() userObjectLogin: LoginAuthDto) {
    return this.authService.login(userObjectLogin);
  }

}
