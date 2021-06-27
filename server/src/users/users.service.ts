import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,getConnection } from 'typeorm';
import * as argon2 from 'argon2';
import * as moment from 'moment';
import { Users } from './users.entity';
import { MailService } from '../mail/mail.service';

@Injectable()
export class UsersService {
    respone : any;
    send = new MailService();

    constructor(
        @InjectRepository(Users) private usersRepository: Repository<Users>
    ) {}

    async authUser(email:string, password:string){
        let getEmail = await this.usersRepository.findOne({
            where: [{ "email": email }]
        });
        if (getEmail && getEmail.remember_token == null && await argon2.verify(getEmail.password, password)) {
            this.respone = getEmail
        } else {
            this.respone = false
        }
        return this.respone;
    }
    
    async getEmail(email:string){
        let getDetail = await this.usersRepository.findOne({
            where: [{ "email": email }]
        });
        return getDetail;
    }

    async detailUser(id:number){
        let getDetail = await this.usersRepository.findOne({
            where: [{ "id": id }]
        });

        return this.respone = {
            code : 200,
            data : getDetail,
            message : "Get Detail User",
        }
    }

    async updateUser(users: any,id: number) {
        users.id = id
        console.log(users)
        let updateUser = this.usersRepository.save(users)

        return this.respone = {
            code : 200,
            message : updateUser,
        }
    }

    async createUser(users: Users) {
        let hash = await argon2.hash(users.password);
        let token = Math.random().toString(36).substr(2, 9);
        let sendMail = await this.send.sendVerify(users.name,users.email,token);
        const create = this.usersRepository.create({ 
            name: users.name, 
            email: users.email,
            password: hash,
            role: false,
            remember_token: token,
            created_at: moment().format(),
            updated_at: moment().format(),
        });
        let save = await this.usersRepository.save(create);
        return  this.respone = {
            code : 200,
            type : 'Bearer',
            message : sendMail
        }
    }

    async verifyUser(_token: string){
        let checkToken = await this.usersRepository.findOne({
            select: ["id","remember_token"],
            where: [{ "remember_token": _token }]
        });
        console.log(checkToken);
        if (checkToken && checkToken.remember_token == _token) {
            checkToken.remember_token = null;
            checkToken.email_verified_at = moment().format();
            await this.usersRepository.save(checkToken);
            this.respone = {
                code : 200,
                message : 'Update Succes Silahkan Login kembali',
            }
        }else {
            this.respone = {
                code : 500,
                message : 'Invalid Credentials',
            }
        }
        return this.respone
    }

    async forgotUser(_email:string){
        let checkEmail = await this.usersRepository.findOne({
            select: ["id","email","name"],
            where: [{ "email": _email }]
        });
        if (checkEmail) {
            let token = Math.random().toString(36).substr(2, 9);
            let sendMail = await this.send.sendForgot(checkEmail.name,checkEmail.email,token);
            checkEmail.remember_token = token;
            await this.usersRepository.save(checkEmail);
            this.respone = {
                code : 200,
                message : sendMail,
            }
        }else{
            this.respone = {
                code : 500,
                message : 'Invalid Credentials',
            }
        }
        return this.respone
    }
    
}
