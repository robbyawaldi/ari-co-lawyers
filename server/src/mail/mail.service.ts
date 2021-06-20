import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";
import getBaseUrl from "get-base-url"

@Injectable()
export class MailService {
    
    authEmail(){
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
            user: 'sancikob@gmail.com',
            pass: 'wrl*yPmox%Y2',
            },
            logger: true
        });
        return transporter
    }

    async sendVerify(name:string,email: string,token: string) {

        const info = await this.authEmail().sendMail({
            from: '"NO REPLY" <sancikob@gmail.com>',
            to: email,
            subject: "Verfiy Email KPI UNAND",
            html: `<p style="margin: 0;"><b>Hai `+name+`</b>, Ketuk tombol di bawah ini untuk mengonfirmasi alamat email Anda. <a href="`+getBaseUrl()+`verfiyemail/`+token+`" target="_blank">Verfikasi Akun</a></p>`,
        });

        return "Message sent: " + info;
    }
    async sendForgot(name:string,email: string,token: string){
        const info = await this.authEmail().sendMail({
            from: '"NO REPLY" <sancikob@gmail.com>',
            to: email,
            subject: "Forgot Email KPI UNAND",
            html: `<p style="margin: 0;"><b>Hai `+name+`</b>, Ketuk tombol di bawah ini untuk forgot email Anda. <a href="`+getBaseUrl()+`forgotemail/`+token+`" target="_blank">Change Password</a></p>`,
        });
        console.log(info)
        return "Message sent: " + info.messageId;
    }
}

