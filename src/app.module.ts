import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './courses/course.module';
import { PersonController } from './person/person.controller/person.controller.controller';
import { PersonService } from './person/person.services/person.services.service';
import { LessonModule } from './Lesson/lesson.module';
import { SuscribeService } from './suscribe/service/service.service';
import { PersonModule } from './person/person.module';

@Module({
  imports: [CourseModule, LessonModule, PersonModule],
  controllers: [AppController],
  providers: [AppService, SuscribeService],
})
export class AppModule {}
