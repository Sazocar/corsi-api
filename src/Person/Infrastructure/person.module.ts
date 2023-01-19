import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entities/person';
import { PersonController } from './controller/person.controller';
import { PersonService } from './services/person.service';
import { CourseInfraestructure } from 'src/course/infrastructure/entities/course';
import { CoursesController } from 'src/course/infrastructure/controllers/courses.controller';
import { CoursesService } from 'src/course/infrastructure/services/courses.service';
import { ICourseRepositoryImpl } from 'src/course/infrastructure/ICourseRepositoryImpl';
import { LessonInfraestructure } from 'src/course/infrastructure/entities/Lesson';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Person,
      CourseInfraestructure,
      LessonInfraestructure,
    ]),
  ],
  controllers: [PersonController, CoursesController],
  providers: [PersonService, CoursesService, ICourseRepositoryImpl],
})
export class PersonModule {}
