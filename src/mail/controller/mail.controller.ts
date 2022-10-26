/* eslint-disable prettier/prettier */
import { Controller, Post } from "@nestjs/common";
import { MailService } from "../service/mail.service";



@Controller('mail')
export class MailController {
  
    constructor(private transporter: MailService){}
    @Post('send')
    async sendEmail() {
       return await this.transporter.sendEmail('brayangt1710@gmail.com','Chavez corazon del pueblooo');
        
    }
}