import { Controller, Get, Param } from '@nestjs/common';
import { Body, Delete, Post, Put, UseGuards } from '@nestjs/common/decorators';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateLessonDto, UpdateLessonDto } from '../Dto/lesson.dto';
import { LessonService } from '../services/lesson.service';

@ApiBearerAuth()
@ApiTags('Lessons')
@UseGuards(JwtAuthGuard)
@Controller('lessons')
export class LessonController {
  constructor(private lessonService: LessonService) {}

  @Get()
  getLessons() {
    return this.lessonService.findAll();
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

  @Put(':lessonId/person/:personId')
  async comment(
    @Param('lessonId', ParseIntPipe) lessonId: number,
    @Param('personId', ParseIntPipe) personId: number,
    @Body() payload: string,
  ) {
    return this.lessonService.commentLesson(lessonId, payload);
  }
}
