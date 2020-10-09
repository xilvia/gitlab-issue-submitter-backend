import { Controller} from '@nestjs/common';
import { Body, Post } from '@nestjs/common';
import { AuthDto } from '../dto/auth.dto';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() authDto: AuthDto, url) {
    const response = await this.authService.login(url, authDto)
    return response;
  }
}
