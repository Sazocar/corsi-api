import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateCourseDto } from '../dtos/course.dto';
import { Course } from '../entities/course';
import { CoursesService } from '../services/courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private coursesServices: CoursesService) {}

  @Get()
  findCourses(): Course[] {
    return this.coursesServices.getAllCourses();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.coursesServices.getCourse(id);
  }

  @Post()
  createCourse(@Body() payload: CreateCourseDto) {
    return this.coursesServices.createCourse(payload);
  }
}
