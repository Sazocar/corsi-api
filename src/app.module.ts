import { Module } from '@nestjs/common';
import { CourseModule } from './Courses copy/infrastructure/courses/course.module';
import { PersonController } from './person/controller/person.controller';
import { PersonService } from './person/services/person.service';
import { LessonModule } from './Lesson/lesson.module';
import { DatabaseModule } from './database/database.module';
import { PersonModule } from './person/person.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    CourseModule,
    LessonModule,
    DatabaseModule,
    PersonModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
