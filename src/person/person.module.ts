import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesService } from 'src/courses/services/courses.service';
import { CoursesController } from 'src/courses/controllers/courses.controller';
import { Course } from 'src/courses/entities/course';
import { Person } from './entities/person';
import { PersonController } from './controller/person.controller';
import { PersonService } from './services/person.service';
import { SuscribeService } from 'src/suscribe/service/service.service';

@Module({
  imports: [TypeOrmModule.forFeature([Person, Course])],
  controllers: [PersonController, CoursesController],
  providers: [PersonService, CoursesService, SuscribeService],
})
export class PersonModule {}
