import { Controller, Get, Param } from '@nestjs/common';
import { Body, Delete, Post, Put } from '@nestjs/common/decorators';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import { CoursesService } from 'src/courses/services/courses.service';
import { CreateLessonDto, UpdateLessonDto } from '../Dto/lesson.dto';
import { LessonService } from '../services/lesson.service';

@Controller('courses/:coursesId/lessons')
export class LessonController {
  constructor(
    private lessonService: LessonService,
    /*private courseService: CoursesService,*/
  ) {}

  /*@Get()
  getLessons(@Param('coursesId', ParseIntPipe) coursesId: number) {
    const course = this.courseService.getCourse(coursesId);
    return this.lessonService.findAll(course.lessons);
  }

  @Get(':lessonId')
  getLesson(
    @Param('coursesId', ParseIntPipe) coursesId: number,
    @Param('lessonId', ParseIntPipe) lessonId: number,
  ) {
    const course = this.courseService.getCourse(coursesId);
    const lesson = this.lessonService.findOne(lessonId, course.lessons);
    return lesson;
  }

  @Post()
  createLesson(
    @Param('coursesId', ParseIntPipe) courseId: number,
    @Body() payload: CreateLessonDto,
  ) {
    const course = this.courseService.getCourse(courseId);
    course.lessons.push(this.lessonService.create(payload));
    return course.lessons[course.lessons.length - 1];
  }

  @Put(':lessonId')
  update(
    @Param('coursesId', ParseIntPipe) courseId: number,
    @Param('lessonId', ParseIntPipe) lessonId: number,
    @Body() payload: UpdateLessonDto,
  ) {
    return this.lessonService.update(
      lessonId,
      this.courseService.getCourse(courseId).lessons,
      payload,
    );
  }

  @Delete(':lessonId')
  delete(
    @Param('coursesId', ParseIntPipe) courseId: number,
    @Param('lessonId', ParseIntPipe) lessonId: number,
  ) {
    const course = this.courseService.getCourse(courseId);
    this.lessonService.remove(course.lessons, lessonId);
    return course.lessons;
  }*/
}
