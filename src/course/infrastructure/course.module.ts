import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesController } from './controllers/courses.controller';
import { CourseInfraestructure } from './entities/course';
import { CoursesService } from './services/courses.service';
import { LessonInfraestructure } from './entities/Lesson';
import { LessonController } from './controllers/lesson.controller';
import { LessonService } from './services/lesson.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([LessonInfraestructure, CourseInfraestructure]),
  ],
  controllers: [CoursesController, LessonController],
  providers: [CoursesService, LessonService],
})
export class CourseModule {}
