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
import { SmsService } from './mensaje/mensaje.service';
import { SmsController } from './mensaje/mensaje.controller';

@Module({
  imports: [
    CourseModule,
    LessonModule,
    //MensajeModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        TWILIO_ACCOUNT_SID: 'AC5273987fc445241a3e7fb48dcc8b2706',
        TWILIO_AUTH_TOKEN: 'a6c73bf5f24d0fc71859b282b9135628',
        TWILIO_VERIFICATION_SERVICE_SID: '+13865304793',
      }),
    }),
  ],
  controllers: [AppController, PersonController, SmsController],
  providers: [AppService, PersonService, SmsService],
})
export class AppModule {}
