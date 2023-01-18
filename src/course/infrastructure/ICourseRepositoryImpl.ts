import { InjectRepository } from '@nestjs/typeorm';
import { ICourseRepository } from '../domain/ICourseRepository';
import { CourseInfraestructure } from './entities/course';
import { Repository } from 'typeorm';
import { CourseID } from 'src/shared/value_objects/idcourse';
import { NotFoundException } from '@nestjs/common/exceptions';
import { Course } from '../domain/course';
import { Lesson } from '../domain/entities/lesson';
import { LessonInfraestructure } from './entities/Lesson';
import { LessonId } from '../domain/entities/value_objects/idlesson';

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

  private convertCourseFromInfraestructureToDomain(
    courseInfraestructure: CourseInfraestructure,
  ): Course {
    const courseDomain: Course = Course.create(
      courseInfraestructure.imageUrl,
      courseInfraestructure.description,
      courseInfraestructure.courseId,
      courseInfraestructure.title,
      courseInfraestructure.subTitle,
      courseInfraestructure.state,
      courseInfraestructure.categories,
      courseInfraestructure.keywords,
      this.convertLessonInfraestructureInDomain(courseInfraestructure.lessons),
    );
    return courseDomain;
  }

  private convertLessonInfraestructureInDomain(
    lessonInfraestructure: Array<LessonInfraestructure>,
  ) {
    const lessonDomain = new Array<Lesson>();
    lessonInfraestructure.forEach((lesson) => {
      lessonDomain.push(
        Lesson.create(lesson.description, lesson.videoUrl, lesson.lessonId),
      );
    });
    return lessonDomain;
  }
}
