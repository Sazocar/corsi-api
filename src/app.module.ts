/* eslint-disable prettier/prettier */
import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailController } from './mail/mail.controller';
import { MailService } from './mail/mail.service';
import { CourseModule } from './courses/course.module';

@Module({
  imports: [CourseModule, MailerModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: async (config: ConfigService) => ({
      transport: {
        host: 'smtp.sendgrid.net',
        secure: false,
        auth: {
          user: 'apikey',
          pass: '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',
        },
      },
      defaults: {
        from: '<sendgrid_from_email_address>'
      },
      template: {
        dir: join(__dirname, './mail/templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true
        }
      }
    }),
    inject: [ConfigService]
  }), ConfigModule.forRoot()],
  controllers: [AppController, MailController],
  providers: [AppService, MailService],
})
export class AppModule {}



