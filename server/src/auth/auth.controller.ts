import { Controller, UseGuards, Post, Request, Body, Get, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { Users } from '../users/users.entity';
import { UsersService } from '../users/users.service';

@Controller()
export class AuthController {

  constructor(private authService: AuthService,    private usersService: UsersService,
) { }

    // @UseGuards(LocalAuthGuard)
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
}
