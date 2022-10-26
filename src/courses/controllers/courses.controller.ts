import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateCourseDto, UpdateCourseDto } from '../dtos/course.dto';
import { Course } from '../entities/course';
import { CoursesService } from '../services/courses.service';

@ApiBearerAuth()
@ApiTags('Courses')
@UseGuards(JwtAuthGuard)
@Controller('courses')
export class CoursesController {
  constructor(private coursesServices: CoursesService) {}

  @Get()
  findCourses() {
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

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCourseDto,
  ) {
    return this.coursesServices.updateCourse(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.coursesServices.deleteCourse(id);
  }
}
