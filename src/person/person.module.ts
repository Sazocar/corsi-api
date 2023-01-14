import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entities/person';
import { PersonController } from './controller/person.controller';
import { PersonService } from './services/person.service';
import { SuscribeService } from 'src/suscribe/service/service.service';
import { Course } from 'src/course/infrastructure/entities/course';
import { CoursesController } from 'src/course/infrastructure/controllers/courses.controller';
import { CoursesService } from 'src/course/infrastructure/services/courses.service';

@Module({
  imports: [TypeOrmModule.forFeature([Person, Course])],
  controllers: [PersonController, CoursesController],
  providers: [PersonService, CoursesService, SuscribeService],
})
export class PersonModule {}
