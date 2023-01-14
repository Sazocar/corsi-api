import { Module } from '@nestjs/common';
import { PersonController } from './person/controller/person.controller';
import { PersonService } from './person/services/person.service';

import { DatabaseModule } from './database/database.module';
import { PersonModule } from './person/person.module';
import { AuthModule } from './auth/auth.module';
import { LessonModule } from './course/infrastructure/lesson.module';
import { CourseModule } from './course/infrastructure/course.module';

@Module({
  imports: [
    CourseModule,
    LessonModule,
    DatabaseModule,
    PersonModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
