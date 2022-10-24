import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesController } from 'src/courses/controllers/courses.controller';
import { CourseModule } from 'src/courses/course.module';
import { Course } from 'src/courses/entities/course';
import { CoursesService } from 'src/courses/services/courses.service';
import { LessonController } from './controllers/lesson.controller';
import { Lesson } from './Entities/Lesson';
import { LessonService } from './services/lesson.service';

@Module({
  imports: [TypeOrmModule.forFeature([Lesson, Course])],
  controllers: [LessonController, CoursesController],
  providers: [LessonService, CoursesService],
})
export class LessonModule {}
