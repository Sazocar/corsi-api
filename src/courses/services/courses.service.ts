import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { CreateCourseDto, UpdateCourseDto } from '../dtos/course.dto';
import { Course } from '../entities/course';
import { Created, Published } from '../entities/statecourse';

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
    const course = await this.courseRepo.findOneBy({ id: id });
    if (!course) {
      throw new NotFoundException(`Course with id #${id} not found`);
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
