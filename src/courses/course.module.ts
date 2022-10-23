import { Module } from '@nestjs/common';
import { CoursesController } from './controllers/courses.controller';
import { CoursesService } from './services/courses.service';
import { SuscribeService } from 'src/suscribe/service/service.service';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService, SuscribeService],
})
export class CourseModule {}
