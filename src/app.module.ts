import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './courses/course.module';
import { ControllersController } from './Lesson/controllers/lesson.controller';
import { ServicesService } from './Lesson/services/lesson.service';

@Module({
  imports: [CourseModule],
  controllers: [AppController, ControllersController],
  providers: [AppService, ServicesService],
})
export class AppModule {}
