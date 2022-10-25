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
import { Published } from '../entities/statecourse';
import { CoursesService } from '../services/courses.service';
import { Deleted, Created, Suspended } from '../entities/statecourse';
import { SuscribeService } from 'src/suscribe/service/service.service';

@Controller('courses')
export class CoursesController {
  constructor(
    private coursesServices: CoursesService,
    private suscribeservice: SuscribeService,
  ) {}

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

  @Put(':id/changestate/deleted')
  changestated(@Param('id', ParseIntPipe) id: number): Course {
    const Aux = new Deleted();
    return this.coursesServices.ChangeState(id, Aux);
  }

  @Put(':id/changestate/published')
  changestatep(@Param('id', ParseIntPipe) id: number): Course {
    const Aux = new Published(this.suscribeservice);
    return this.coursesServices.ChangeState(id, Aux);
  }

  @Put(':id/changestate/suspended')
  changestates(@Param('id', ParseIntPipe) id: number): Course {
    const Aux = new Suspended();
    return this.coursesServices.ChangeState(id, Aux);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.coursesServices.deleteCourse(id);
  }
}
