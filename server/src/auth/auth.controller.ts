import { Controller, UseGuards, Post, Request, Body, Get, Param, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Users } from '../users/users.entity';
import { UsersService } from '../users/users.service';

@Controller()
export class AuthController {

  constructor(private authService: AuthService,    private usersService: UsersService,
) { }

    @Post('login')
    async login(@Body() body) {
        return this.authService.login(body);
    }
    @Get('verfiyemail/:token')
    getVerfiyEmail(@Param() params) {
        console.log(params.token)
        return this.usersService.verifyUser(params.token);
    }

    @Post('forgotemail')
    forgotEmail(@Body() body) {
        return this.usersService.forgotUser(body.email);
    }

    @Post('register')
    create(@Body() users: Users) {
        return this.usersService.createUser(users);
    }
    
    @Get('google')
    @UseGuards(AuthGuard('google'))
    async googleAuth(@Req() req) {
        console.log('hell')
    }

    @Get('google/redirect')
    @UseGuards(AuthGuard('google'))
    googleAuthRedirect(@Req() req,users: Users) {
        return this.authService.googleLogin(req,users)
    }

    
}
