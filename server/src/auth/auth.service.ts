import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from '../users/users.dto';

@Injectable()
export class AuthService {
  respone : any;
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService) { }

  async validateUser(users: LoginUserDto): Promise<any> {
    const getusers = await this.usersService.authUser(users.email,users.password);
    if (getusers) {
      const { password, ...result } = getusers;
      return result;
    }
    return null;
  }

  async login(users: LoginUserDto) {
    const getusers = await this.usersService.authUser(users.email,users.password);
    if (getusers) {
      const payload = {
        id: getusers.id,
        name: getusers.name,
        email: getusers.email,
        role: getusers.role,
      };
      this.respone = {
        code : 200,
        user: getusers,
        type : 'Bearer',
        token: this.jwtService.sign(payload),
      };
    }else{
      this.respone = {
        code : 500,
        user: getusers,
      };
    }
    return this.respone;
  }
}
