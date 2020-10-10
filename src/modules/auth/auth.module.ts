import { HttpModule, Module} from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from '../auth/services/auth.service';

@Module({
  imports: [
      HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 5,
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
