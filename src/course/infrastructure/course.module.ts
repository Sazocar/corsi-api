import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesController } from './controllers/courses.controller';
import { CoursesService } from './services/courses.service';
import { Lesson } from './entities/Lesson';
import { LessonController } from './controllers/lesson.controller';
import { LessonService } from './services/lesson.service';

@Module({
  imports: [TypeOrmModule.forFeature([Lesson])],
  controllers: [CoursesController, LessonController],
  providers: [CoursesService, LessonService],
})
export class CourseModule {}
