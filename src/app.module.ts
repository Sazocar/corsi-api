import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './courses/course.module';
import { PersonController } from './person/person.controller/person.controller.controller';
import { PersonService } from './person/person.services/person.services.service';
import { LessonModule } from './Lesson/lesson.module';
//import { MensajeModule } from './mensaje/mensaje.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { SmsService } from './sms/service/sms.service';
import { SmsController } from './sms/controller/sms.controller';

@Module({
  imports: [
    CourseModule,
    LessonModule,
    //MensajeModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        TWILIO_ACCOUNT_SID: Joi.string().required(),
        TWILIO_AUTH_TOKEN: Joi.string().required(),
        TWILIO_VERIFICATION_SERVICE_SID: Joi.string().required(),
      }),
    }),
  ],
  controllers: [AppController, PersonController, SmsController],
  providers: [AppService, PersonService, SmsService],
})
export class AppModule {}
