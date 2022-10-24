import {
  forwardRef,
  Injectable,
  NotFoundException,
  Inject,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { CoursesService } from 'src/courses/services/courses.service';
import { Repository } from 'typeorm';
import { CreateLessonDto, UpdateLessonDto } from '../Dto/lesson.dto';
import { Lesson } from '../Entities/Lesson';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private lessonRepo: Repository<Lesson>,
  ) {}

  create(payload: CreateLessonDto) {
    const newLesson = this.lessonRepo.create(payload);
    return newLesson;
  }

  async update(id: number, payload: UpdateLessonDto) {
    const lesson = await this.lessonRepo.findOneBy({ id: id });
    this.lessonRepo.merge(lesson, payload);
    return this.lessonRepo.save(lesson);
  }

  remove(id: number) {
    return this.lessonRepo.delete(id);
  }

  findAll() {
    return this.lessonRepo.find();
  }

  async findOne(id: number) {
    const lesson = await this.lessonRepo.findOneBy({ id: id });
    if (!lesson) {
      throw new NotFoundException(`Lesson ${id} not found`);
    }
    return lesson;
  }
}
