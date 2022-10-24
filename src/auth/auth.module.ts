import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthConfig } from './auth.config';

@Module({
  controllers: [AuthController],
  providers: [AuthConfig, AuthService],
})
export class AuthModule {}
