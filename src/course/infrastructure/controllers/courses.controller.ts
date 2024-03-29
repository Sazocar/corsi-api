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
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateCourseDto, UpdateCourseDto } from '../dtos/course.dto';
import { CoursesService } from '../services/courses.service';
import { ICourseRepositoryImpl } from '../ICourseRepositoryImpl';
import { CourseID } from 'src/shared/value_objects/idcourse';
import { CourseInfraestructure } from '../entities/course';
import { GetCoursesService } from 'src/course/aplication/aplication-service/GetCoursesService';
import { GethPublishedService } from 'src/course/aplication/aplication-service/serachPublisheService';
import { FindById } from 'src/course/aplication/aplication-service/findbyid';

// @ApiBearerAuth()
@ApiTags('Courses')
// @UseGuards(JwtAuthGuard)
@Controller('courses')
export class CoursesController {
  constructor(
    private coursesServices: CoursesService,
    private courseRepo: ICourseRepositoryImpl,
  ) {}

  @Get()
  async findCourses() {
    const service = new GetCoursesService();
    const courses = service.execute(this.courseRepo);
    const coursesInfraestructure = new Array<CourseInfraestructure>();
    (await courses).forEach((course) => {
      coursesInfraestructure.push(
        ICourseRepositoryImpl.convertCourseFromDomainToInfraestructure(course),
      );
    });
    return coursesInfraestructure;
  }

  @Get('published')
  async findpublishedCourses() {
    const service = new GethPublishedService();
    const courses = service.execute(this.courseRepo);
    const coursesInfraestructure = new Array<CourseInfraestructure>();
    (await courses).forEach((course) => {
      coursesInfraestructure.push(
        ICourseRepositoryImpl.convertCourseFromDomainToInfraestructure(course),
      );
    });
    return coursesInfraestructure;
  }

  // @Get(':id')
  // findOne(@Param('id', ParseIntPipe) id: number) {
  //   return this.coursesServices.getCourse(id);
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const courseId = new CourseID(id);
    const service = new FindById(courseId);
    return service.execute(this.courseRepo);
  }

  // @Get('/categories/:category')
  // findcategory(@Param('category') category: string) {
  //   return this.coursesServices.getCoursebycategory(category);
  // }

  @Get('/categories/:category')
  findcategory(@Param('category') category: string) {
    return this.courseRepo.findCoursesByCategory(category);
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
