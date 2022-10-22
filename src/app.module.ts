import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './courses/course.module';
import { ControllersController } from './lesson/controllers/controllers.controller';

@Module({
  imports: [CourseModule],
  controllers: [AppController, ControllersController],
  providers: [AppService],
})
export class AppModule {}
