import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './courses/course.module';
import { PersonController } from './person/person.controller/person.controller.controller';
import { PersonService } from './person/person.services/person.services.service';
import { LessonModule } from './Lesson/lesson.module';

@Module({
  imports: [CourseModule, LessonModule],
  controllers: [AppController, PersonController],
  providers: [AppService, PersonService],
})
export class AppModule {}
