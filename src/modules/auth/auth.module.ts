import { Module} from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from '../auth/services/auth.service';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
