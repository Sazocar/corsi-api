import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateCourseDto, UpdateCourseDto } from '../dtos/course.dto';
import { Course } from '../entities/course';
import { Deleted, Published, Suspended } from '../entities/statecourse';
import { CoursesService } from '../services/courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private coursesServices: CoursesService) {}

  @Get()
  findCourses(): Course[] {
    return this.coursesServices.getAllCourses();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Course {
    return this.coursesServices.getCourse(id);
  }

  @Post()
  createCourse(@Body() payload: CreateCourseDto): Course {
    return this.coursesServices.createCourse(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCourseDto,
  ): Course {
    return this.coursesServices.updateCourse(id, payload);
  }

  @Put(':id/changestate/deleted')
  changestated(@Param('id', ParseIntPipe) id: number): Course {
    const Aux = new Deleted();
    return this.coursesServices.ChangeState(id, Aux);
  }

  @Put(':id/changestate/suspended')
  changestates(@Param('id', ParseIntPipe) id: number): Course {
    const Aux = new Suspended();
    return this.coursesServices.ChangeState(id, Aux);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Course[] {
    return this.coursesServices.deleteCourse(id);
  }
}
