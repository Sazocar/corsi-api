import { Controller, Get, Param } from '@nestjs/common';
import { Body, Delete, Post, Put, UseGuards } from '@nestjs/common/decorators';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateLessonDto, UpdateLessonDto } from '../dtos/lesson.dto';
import { LessonService } from '../services/lesson.service';
import { ICourseRepositoryImpl } from '../ICourseRepositoryImpl';

// @ApiBearerAuth()
@ApiTags('Lessons')
// @UseGuards(JwtAuthGuard)
@Controller('lessons')
export class LessonController {
  constructor(
    private lessonService: LessonService,
    private lessonRepo: ICourseRepositoryImpl,
  ) {}

  @Get()
  getLessons() {
    return this.lessonRepo.findLessons();
  }

  @Get(':lessonId')
  getLesson(@Param('lessonId', ParseIntPipe) lessonId: number) {
    return this.lessonService.findOne(lessonId);
  }

  @Post()
  createLesson(@Body() payload: CreateLessonDto) {
    return this.lessonService.create(payload);
  }

  @Put(':lessonId')
  update(
    @Param('lessonId', ParseIntPipe) lessonId: number,
    @Body() payload: UpdateLessonDto,
  ) {
    return this.lessonService.update(lessonId, payload);
  }

  @Delete(':lessonId')
  delete(@Param('lessonId', ParseIntPipe) lessonId: number) {
    return this.lessonService.remove(lessonId);
  }
}
