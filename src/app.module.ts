import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './courses/course.module';
import { LessonModule } from './Lesson/lesson.module';

@Module({
  imports: [CourseModule, LessonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
