import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesService } from 'src/courses/services/courses.service';
import { CoursesController } from 'src/courses/controllers/courses.controller';
import { Course } from 'src/courses/entities/course';
import { Person } from './entities/person';
import { PersonController } from './person.controller/person.controller.controller';
import { PersonService } from './person.services/person.services.service';

@Module({
  imports: [TypeOrmModule.forFeature([Person, Course])],
  controllers: [PersonController, CoursesController],
  providers: [PersonService, CoursesService],
})
export class PersonModule {}
