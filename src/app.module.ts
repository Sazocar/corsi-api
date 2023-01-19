import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { PersonModule } from './Person/Infrastructure/person.module';
import { AuthModule } from './auth/auth.module';
import { CourseModule } from './course/infrastructure/course.module';

@Module({
  imports: [CourseModule, DatabaseModule, PersonModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
