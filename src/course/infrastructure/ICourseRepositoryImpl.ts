import { InjectRepository } from '@nestjs/typeorm';
import { ICourseRepository } from '../domain/ICourseRepository';
import { CourseInfraestructure } from './entities/course';
import { Repository } from 'typeorm';
import { CourseID } from 'src/shared/value_objects/idcourse';
import { NotFoundException } from '@nestjs/common/exceptions';
import { Course } from '../domain/course';
import { Lesson } from '../domain/entities/lesson';

export class ICourseRepositoryImpl implements ICourseRepository {
  constructor(
    @InjectRepository(CourseInfraestructure)
    private courseRepo: Repository<CourseInfraestructure>,
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
    } else {
      //var courses =
    }
    return course;
  }

  async findPublishedCourses() {
    const courses = await this.courseRepo.findBy({
      state: 'Published',
    });
    if (!courses) {
      throw new NotFoundException(`Courses not found`);
    }
    return courses;
  }

  async findCoursesByCategory(categories: string) {
    const course = await this.courseRepo.findBy({
      categories: categories,
      state: 'Published',
    });
    if (!course) {
      throw new NotFoundException('Courses not found');
    }
    return course;
  }

  async findCourseByKeywords(keywords: string) {
    const course = await this.courseRepo.findBy({
      keywords: keywords,
      state: 'Published',
    });
    if (!course) {
      throw new NotFoundException('Course not found');
    }
    return course;
  }

  //   updateCourse(course: Course) {
  //     throw new Error('Method not implemented.');
  //   }

  //   deleteCourse(course: Course) {
  //     throw new Error('Method not implemented.');
  //   }

  private convertCourseDataModelInCourseDomain(
    courseDataModel: CourseInfraestructure,
  ) {
    const courseDomain = new Course();
    courseDomain.setImageCourse(new ImageCourse(courseDataModel.imageUrl));
    courseDomain.setDescriptionCourse(
      new DescriptionCourse(courseDataModel.description),
    );
    courseDomain.setCourseId(new CourseID(courseDataModel.courseId));
    // courseDomain.setCourseState();
    //courseDomain.setCourseCategory();
    // courseDomain.setKeywords();
    //Falta metodo para cambiar lessonDataModel a lessonDomain
    courseDataModel.lessons.forEach((lesson) =>
      courseDomain.getLesson().push(new Lesson(lesson)),
    );
  }
}
