/* eslint-disable prettier/prettier */
import { Controller, Post } from "@nestjs/common";
import { MailService } from "./mail.service";



@Controller('mail')
export class MailController {
  
    constructor(private transporter: MailService){}
    @Post('send')
    async sendEmail() {
       return await this.transporter.sendEmail().sendMail({
            from: 'ravenscorsi@gmail.com', // sender address
            to: "saimn.azocar@gmail.com", // list of receivers
            subject: "Le mando nudes a carlos si esta chingada sirve", // Subject line
            html: '<b>me estaba ahogando en un charco de agua</b>',
          });
        
    }
}