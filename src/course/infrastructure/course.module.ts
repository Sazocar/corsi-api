import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesController } from './controllers/courses.controller';
import { CourseInfraestructure } from './entities/course';
import { CoursesService } from './services/courses.service';
import { LessonInfraestructure } from './entities/Lesson';
import { LessonController } from './controllers/lesson.controller';
import { LessonService } from './services/lesson.service';
import { ICourseRepositoryImpl } from './ICourseRepositoryImpl';
import { Person } from 'src/Person/Domain/Person';

@Module({
  imports: [
    TypeOrmModule.forFeature([LessonInfraestructure, CourseInfraestructure]),
  ],
  controllers: [CoursesController, LessonController],
  providers: [CoursesService, LessonService, ICourseRepositoryImpl],
})
export class CourseModule {}
