import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuscribeService } from 'src/suscribe/service/service.service';
import { LessonController } from './controllers/lesson.controller';
import { Lesson } from './Entities/Lesson';
import { LessonService } from './services/lesson.service';
import { CoursesService } from './services/courses.service';
import { Course } from './entities/course';
import { CoursesController } from './controllers/courses.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Lesson, Course])],
  controllers: [LessonController, CoursesController],
  providers: [LessonService, CoursesService, SuscribeService],
})
export class LessonModule {}
