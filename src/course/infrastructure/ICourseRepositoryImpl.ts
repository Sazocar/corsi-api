import { InjectRepository } from '@nestjs/typeorm';
import { ICourseRepository } from '../domain/ICourseRepository';
import { Course } from './entities/course';
import { Repository } from 'typeorm';
import { CourseID } from 'src/shared/value_objects/idcourse';
import { NotFoundException } from '@nestjs/common/exceptions';

export class ICourseRepositoryImpl implements ICourseRepository {
  constructor(
    @InjectRepository(Course) private courseRepo: Repository<Course>,
  ) {}
  findCourses() {
    return this.courseRepo.find({
      relations: ['lessons'],
    });
  }

  async findCourse(courseId: CourseID) {
    const course = await this.courseRepo.findOne({
      where: { courseId: courseId.getId() },
      relations: ['lessons'],
    });
    if (!course) {
      throw new NotFoundException(
        `Course with id #${courseId.getId()} not found`,
      );
    }
    return course;
  }

  findCourseByCourseId(courseId: CourseID) {
    throw new Error('Method not implemented.');
  }

  findPublishedCourses() {
    throw new Error('Method not implemented.');
  }

  findCoursesByCategory(category: string) {
    throw new Error('Method not implemented.');
  }

  findCourseByKeywords(keywords: string) {
    throw new Error('Method not implemented.');
  }

  //   updateCourse(course: Course) {
  //     throw new Error('Method not implemented.');
  //   }

  //   deleteCourse(course: Course) {
  //     throw new Error('Method not implemented.');
  //   }
}
