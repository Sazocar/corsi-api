import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesController } from './controllers/courses.controller';
import { Course } from './entities/course';
import { CoursesService } from './services/courses.service';
import { SuscribeService } from 'src/suscribe/service/service.service';

@Module({
  imports: [TypeOrmModule.forFeature([Course])],
  controllers: [CoursesController],
  providers: [CoursesService, SuscribeService],
})
export class CourseModule {}
