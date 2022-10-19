import { Controller, Get } from '@nestjs/common';
import { Course } from '../entities/course';
import { CoursesService } from '../services/courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private coursesServices: CoursesService) {}

  @Get()
  findCourses(): Course[] {
    return this.coursesServices.getAllCourses();
  }
}
