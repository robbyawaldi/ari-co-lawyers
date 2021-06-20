import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from '../users/users.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(users: LoginUserDto): Promise<any> {
    const user = await this.authService.validateUser(users);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
