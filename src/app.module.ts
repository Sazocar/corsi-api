/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailController } from './mail/controller/mail.controller';
import { CourseModule } from './courses/course.module';
import { MailService } from './mail/service/mail.service';

@Module({
  imports: [CourseModule],
  controllers: [AppController, MailController],
  providers: [AppService, MailService],
})
export class AppModule {}
