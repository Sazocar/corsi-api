/* eslint-disable prettier/prettier */
import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailController } from './mail/mail.controller';
import { CourseModule } from './courses/course.module';
import { MailService } from "./mail/mail.service";


@Module({
  imports: [CourseModule],
  controllers: [AppController, MailController],
  providers: [AppService, MailService],
})
export class AppModule {}



