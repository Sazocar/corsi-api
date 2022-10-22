import { Controller, Get, Param } from '@nestjs/common';
import { CoursesService } from 'src/courses/services/courses.service';
import { LessonService } from '../services/lesson.service';

@Controller('courses/:coursesId/lessons')
export class LessonController {
  constructor(
    private lessonService: LessonService,
    private courseService: CoursesService,
  ) {}

  @Get()
  getLessons(@Param('coursesId') coursesId: number) {
    const course = this.courseService.getCourse(coursesId);
    return this.lessonService.findAll(course.lessons);
  }

  @Get(':lessonId')
  getLesson(
    @Param('coursesId') coursesId: number,
    @Param('lessonId') lessonId: number,
  ) {
    const course = this.courseService.getCourse(coursesId);
    const lesson = this.lessonService.findOne(lessonId, course.lessons);
    return lesson;
  }
}
