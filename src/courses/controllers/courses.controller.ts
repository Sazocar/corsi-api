/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { CoursesService } from '../services/courses.service';
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
  @Get('/categories/:category')
  findcategory(@Param('category') category: string) {
    return this.coursesServices.getCoursebycategory(category);
  }
  @Get('/keyword/:keyword')
  findkeyword(@Param('keyword') keyword: string) {
    return this.coursesServices.getCoursebykeyword(keyword);
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

  @Put(':id/changestate')
  changestated(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCourseDto,
  ) {
    return this.coursesServices.ChangeState(id, payload);
  }
  /*
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
*/
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.coursesServices.deleteCourse(id);
  }
}
