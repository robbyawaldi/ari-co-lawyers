import { Controller, Post, Body, Get, Put, Delete,Param,UseGuards,Request,Patch} from '@nestjs/common';
import { Users } from './users.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { AuthService } from '../auth/auth.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
@ApiBearerAuth('JWT')
@UseGuards(AuthGuard('google'))
@UseGuards(JwtAuthGuard)
export class UsersController {
    constructor(
        private service: UsersService,
    ) { }
    
    @Patch()
    update(@Request() req) {
        return this.service.updateUser(req.body,req.user.id);
    }

    @Get()
    get(@Request() req){
        return this.service.detailUser(req.user.id);
    }
}
