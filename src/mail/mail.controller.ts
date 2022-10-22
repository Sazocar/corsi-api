/* eslint-disable prettier/prettier */
import { Controller, Post } from "@nestjs/common";
import { MailService } from "./mail.service";

@Controller('mail')
export class MailController {
    constructor(private readonly mailService: MailService) {}

    @Post('send')
    async sendEmail() {
        return await this.mailService.sendMail("jimenezguillermo1208@gmail.com", "Guillermo");
    }
}