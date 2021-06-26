import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { GoogleStrategy } from './google.strategy'
import * as dotenv from 'dotenv'

dotenv.config()
@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({
    secret: process.env.JWT_SECRET,
  }),],
  providers: [AuthService, LocalStrategy, JwtStrategy,GoogleStrategy],
  controllers: [AuthController]
})
export class AuthModule { 
    constructor() {
    }
}
