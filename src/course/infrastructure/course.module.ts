import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesController } from './controllers/courses.controller';
import { Course } from './entities/course';
import { CoursesService } from './services/courses.service';
import { SuscribeService } from 'src/suscribe/service/service.service';
import { Lesson } from './entities/Lesson';
import { LessonController } from './controllers/lesson.controller';
import { LessonService } from './services/lesson.service';

@Module({
  imports: [TypeOrmModule.forFeature([Lesson, Course])],
  controllers: [CoursesController, LessonController],
  providers: [CoursesService, SuscribeService, LessonService],
})
export class CourseModule {}
