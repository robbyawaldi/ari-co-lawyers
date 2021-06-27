import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from '../users/users.dto';
import { Users } from '../users/users.entity';

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
  
  async googleLogin(req,users) {
    let emailGoogle = req.user;
    if (!emailGoogle) {
      this.respone = {
        code : 500,
        message: 'No user from google',
      };
    }else{
      const getusers = await this.usersService.getEmail(emailGoogle.email);
      if (getusers && getusers.accessToken == null) {
        getusers.picture = emailGoogle.picture;
        getusers.accessToken = emailGoogle.accessToken;
        getusers.provider = emailGoogle.provider;
        getusers.save()
      }
      // else{
      //   users.password = emailGoogle.id;
      //   users.name = emailGoogle.fullname,
      //   users.email = emailGoogle.email,
      //   users.picture = emailGoogle.picture,
      //   users.provider = emailGoogle.provider
      //   users.accessToken = emailGoogle.accessToken
      //   const createUsers = await this.usersService.createUser(users)
      // }
      this.respone = {
        code : 200,
        data : emailGoogle,
        message: 'User information from google',
      };
    }
    return this.respone
  }

}
