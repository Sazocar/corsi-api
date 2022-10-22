/* eslint-disable prettier/prettier */
import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import { template } from "handlebars";
import path from "path";

@Injectable()
export class MailService {
    constructor(private mailerService: MailerService) {}

    async sendMail(email: string, name: string) {
        console.log(email)
        await this.mailerService.sendMail({
            to: email,
            from: "bjgamboa.19@est.ucab.edu.ve",
            subject: 'Greeting from NestJS NodeMailer',
            template: "./email",
            context: {
                name: name
            }
        })
    }
}
