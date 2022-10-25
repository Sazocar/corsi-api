import { Module } from '@nestjs/common';
import { SmsController } from 'src/mensaje/mensaje.controller';
import { SmsService } from 'src/mensaje/mensaje.service';
import { CoursesController } from './controllers/courses.controller';
import { CoursesService } from './services/courses.service';

@Module({
  controllers: [CoursesController, SmsController],
  providers: [CoursesService, SmsService],
})
export class CourseModule {}
