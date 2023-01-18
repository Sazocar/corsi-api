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
    @InjectRepository(LessonInfraestructure)
    private lessonRepo: Repository<LessonInfraestructure>,
  ) {}

  async findCourses() {
    const courseInfreaestructure = await this.courseRepo.find({
      relations: ['lessons'],
    });
    const coursesDomain = new Array<Course>();
    courseInfreaestructure.forEach((course) =>
      coursesDomain.push(this.convertCourseFromInfraestructureToDomain(course)),
    );
    return coursesDomain;
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
    const courseDomain = this.convertCourseFromInfraestructureToDomain(course);
    return courseDomain;
  }

  async findPublishedCourses() {
    const courseInfreaestructure = await this.courseRepo.findBy({
      state: 'Published',
    });
    if (!courseInfreaestructure) {
      throw new NotFoundException(`Courses not found`);
    }
    const coursesDomain = new Array<Course>();
    courseInfreaestructure.forEach((course) =>
      coursesDomain.push(this.convertCourseFromInfraestructureToDomain(course)),
    );
    return coursesDomain;
  }

  async findCoursesByCategory(categories: string) {
    const courseInfreaestructure = await this.courseRepo.findBy({
      categories: categories,
    });
    if (!courseInfreaestructure) {
      throw new NotFoundException('Course not found');
    }
    const coursesDomain = new Array<Course>();
    courseInfreaestructure.forEach((course) =>
      coursesDomain.push(this.convertCourseFromInfraestructureToDomain(course)),
    );
    return coursesDomain;
  }

  async findCourseByKeywords(keywords: string) {
    const courseInfreaestructure = await this.courseRepo.findBy({
      keywords: keywords,
      state: 'Published',
    });
    if (!courseInfreaestructure) {
      throw new NotFoundException('Course not found');
    }
    const coursesDomain = new Array<Course>();
    courseInfreaestructure.forEach((course) =>
      coursesDomain.push(this.convertCourseFromInfraestructureToDomain(course)),
    );
    return coursesDomain;
  }

  async findLessons() {
    const lessonsInfreaestructure = await this.lessonRepo.find();
    const lessonsDomain = this.convertLessonFromInfraestructureToDomain(
      lessonsInfreaestructure,
    );
    return lessonsDomain;
  }

  //   updateCourse(course: Course) {
  //     throw new Error('Method not implemented.');
  //   }

  //   deleteCourse(course: Course) {
  //     throw new Error('Method not implemented.');
  //   }

  private convertCourseFromInfraestructureToDomain(
    courseInfraestructure: CourseInfraestructure,
  ) {
    const courseDomain: Course = Course.create(
      courseInfraestructure.imageUrl,
      courseInfraestructure.description,
      courseInfraestructure.courseId,
      courseInfraestructure.title,
      courseInfraestructure.subTitle,
      courseInfraestructure.state,
      courseInfraestructure.categories,
      courseInfraestructure.keywords,
      this.convertLessonFromInfraestructureToDomain(
        courseInfraestructure.lessons,
      ),
    );
    return courseDomain;
  }

  private convertLessonFromInfraestructureToDomain(
    lessonInfraestructure: Array<LessonInfraestructure>,
  ) {
    const lessonDomain = new Array<Lesson>();
    if (lessonInfraestructure != null) {
      lessonInfraestructure.forEach((lesson) => {
        lessonDomain.push(
          Lesson.create(
            lesson.description,
            lesson.videoUrl,
            lesson.lessonId,
            lesson.title,
          ),
        );
      });
    }
    return lessonDomain;
  }

  static convertCourseFromDomainToInfraestructure(courseDomain: Course) {
    const courseInfraestructure: CourseInfraestructure =
      CourseInfraestructure.create(
        courseDomain.getCourseId().getId(),
        courseDomain.getTitle().getTitle(),
        courseDomain.getDescriptionCourse().getDescription(),
        this.convertLessonFromDomainToInfraestructure(courseDomain.getLesson()),
        courseDomain.getCourseCategory().toString(),
        courseDomain.getKeyword().getKeyword(),
        courseDomain.getCourseState().toString(),
        courseDomain.getImageCourse().getImage(),
      );
    return courseInfraestructure;
  }

  static convertLessonFromDomainToInfraestructure(lessonDomain: Array<Lesson>) {
    const lessonInfraestructure = new Array<LessonInfraestructure>();
    if (lessonDomain != null) {
      lessonDomain.forEach((lesson) => {
        lessonInfraestructure.push(
          LessonInfraestructure.create(
            lesson.getlessonDescription().getDescription(),
            lesson.getvideolesson().getVideo(),
            lesson.getlessonid().getId(),
            lesson.getLessonTitle().getTitle(),
          ),
        );
      });
    }
    return lessonInfraestructure;
  }
}
