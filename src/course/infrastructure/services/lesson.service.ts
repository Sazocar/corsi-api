import {
  forwardRef,
  Injectable,
  NotFoundException,
  Inject,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { CreateLessonDto, UpdateLessonDto } from '../dtos/lesson.dto';
import { LessonInfraestructure } from '../entities/Lesson';
import { CoursesService } from './courses.service';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(LessonInfraestructure)
    private lessonRepo: Repository<LessonInfraestructure>,
    private coursesService: CoursesService,
  ) {}

  async create(payload: CreateLessonDto) {
    const newLesson = this.lessonRepo.create(payload);
    if (payload.courseId) {
      const course = await this.coursesService.getCourse(payload.courseId); //Esto es una promesa
      newLesson.course = course;
    }
    return this.lessonRepo.save(newLesson);
  }

  async update(id: number, payload: UpdateLessonDto) {
    const lesson = await this.lessonRepo.findOneBy({ id: id });
    if (payload.courseId) {
      const course = await this.coursesService.getCourse(payload.courseId); //Esto es una promesa
      lesson.course = course;
    }
    this.lessonRepo.merge(lesson, payload);
    return this.lessonRepo.save(lesson);
  }

  async remove(id: number) {
    const lesson = await this.lessonRepo.findOneBy({ id: id });
    if (!lesson) {
      throw new NotFoundException(`Lesson with id #${id} not found`);
    }
    this.lessonRepo.delete(id);
    return lesson;
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
