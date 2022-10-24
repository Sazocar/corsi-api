import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLessonDto, UpdateLessonDto } from '../Dto/lesson.dto';
import { Lesson } from '../Entities/Lesson';

@Injectable()
export class LessonService {
  private counterId = 0;

  create(payload: CreateLessonDto) {
    const newLesson = {
      id: this.counterId,
      ...payload,
    };
    this.counterId += 1;
    return newLesson;
  }

  /*update(id: number, lessons: Lesson[], payload: UpdateLessonDto) {
    const lessonToUpdate = this.findOne(id, lessons);
    if (!lessonToUpdate) {
      throw new NotFoundException(`Not found ${id}`);
    }
    const index = lessons.findIndex((item) => item.id === id);
    lessons[index] = {
      ...lessonToUpdate,
      ...payload,
    };
    return lessons[index];
  }

  remove(lessons: Lesson[], id: number) {
    const index = lessons.findIndex((item) => item.id === id);
    console.log(index);
    if (index === -1) {
      throw new NotFoundException(`Lesson ${id} not found`);
    }
    lessons.splice(index, 1);
    return lessons;
  }

  findAll(lessons: Lesson[]) {
    return lessons;
  }

  findOne(id: number, lessons: Lesson[]) {
    const lesson = lessons.find((item) => item.id === id);
    if (!lesson) {
      throw new NotFoundException(`Lesson ${id} not found`);
    }
    return lesson;
  }*/
}
