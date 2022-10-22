import { Module } from '@nestjs/common';
import { CoursesService } from 'src/courses/services/courses.service';
import { LessonController } from './controllers/lesson.controller';
import { LessonService } from './services/lesson.service';

@Module({
  controllers: [LessonController],
  providers: [LessonService, CoursesService],
})
export class LessonModule {}
