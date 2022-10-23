import { Module } from '@nestjs/common';
import { CoursesService } from 'src/courses/services/courses.service';
import { CoursesController } from 'src/courses/controllers/courses.controller';
import { SuscribeService } from 'src/suscribe/service/service.service';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService, SuscribeService],
})
export class PersonModule {}
