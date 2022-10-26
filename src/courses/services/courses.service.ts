import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { CreateCourseDto, UpdateCourseDto } from '../dtos/course.dto';
import { Course } from '../entities/course';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course) private courseRepo: Repository<Course>,
  ) {}

  getAllCourses() {
    return this.courseRepo.find({
      relations: ['lessons'],
    });
  }

  async getCourse(id: number) {
    const course = await this.courseRepo.findOne({
      where: { id: id },
      relations: ['lessons'],
    });
    if (!course) {
      throw new NotFoundException(`Course with id #${id} not found`);
    }
    return course;
  }

  async getCoursebycategory(categories: string) {
    const course = await this.courseRepo.findBy({
      categories: categories,
      state: 'publicado',
    });
    if (!course) {
      throw new NotFoundException(`Course with id #${categories} not found`);
    }
    return course;
  }

  async getCoursebykeyword(keywords: string) {
    const course = await this.courseRepo.findBy({
      keywords: keywords,
      state: 'publicado',
    });
    if (!course) {
      throw new NotFoundException(`Course with id #${keywords} not found`);
    }
    return course;
  }

  createCourse(data: CreateCourseDto) {
    const newCourse = this.courseRepo.create(data);
    return this.courseRepo.save(newCourse);
  }

  async updateCourse(id: number, changes: UpdateCourseDto) {
    const course = await this.courseRepo.findOneBy({ id: id });
    this.courseRepo.merge(course, changes);
    return this.courseRepo.save(course);
  }

  deleteCourse(id: number) {
    return this.courseRepo.delete(id);
  }
}
