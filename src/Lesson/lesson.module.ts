import { Module } from '@nestjs/common';
import { CourseModule } from 'src/courses/course.module';
import { CoursesService } from 'src/courses/services/courses.service';
import { LessonController } from './controllers/lesson.controller';
import { LessonService } from './services/lesson.service';

@Module({
  controllers: [LessonController],
  providers: [LessonService, CourseModule],
})
export class LessonModule {}
