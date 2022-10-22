import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './courses/course.module';
import { PersonControllerController } from './person/person.controller/person.controller.controller';
import { PersonServicesService } from './person/person.services/person.services.service';

@Module({
  imports: [CourseModule],
  controllers: [AppController, PersonControllerController],
  providers: [AppService, PersonServicesService],
})
export class AppModule {}
