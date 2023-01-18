import { IMemento } from 'src/shared/IMemento';
import { Lesson } from './entities/lesson';
import { CourseID } from 'src/shared/value_objects/idcourse';
import { Course } from './course';
import { ImageCourse } from './value_objects/imagecourse';
import { DescriptionCourse } from './value_objects/descrption';
import { CourseState } from './value_objects/courseState';
import { Coursecategory } from './value_objects/coursecategory';
import { Keyword } from './value_objects/keyword';

export class CourseMemento implements IMemento {
  private imageCourse: ImageCourse;
  private descriptionCourse: DescriptionCourse;
  private courseid: CourseID;
  private courseState: CourseState;
  private courseCategory: Coursecategory;
  private keywords: Array<Keyword>;
  private lessons: Array<Lesson>;

  constructor(course: Course) {
    this.imageCourse = course.getImageCourse();
    this.descriptionCourse = course.getDescriptionCourse();
    this.courseid = course.getCourseId();
    this.courseState = course.getCourseState();
    this.courseCategory = course.getCourseCategory();
    //this.keywords = course.getKeywords();
    this.lessons = course.getLesson();
  }

  getState(): IMemento {
    return this;
  }

  public getImageCourse(): ImageCourse {
    return this.imageCourse;
  }

  public getDescriptionCourse(): DescriptionCourse {
    return this.descriptionCourse;
  }

  public getCourseId(): CourseID {
    return this.courseid;
  }

  public getCourseState(): CourseState {
    return this.courseState;
  }

  public getCourseCategory(): Coursecategory {
    return this.courseCategory;
  }

  public getKeywords(): Array<Keyword> {
    return this.keywords;
  }

  public getLesson(): Array<Lesson> {
    return this.lessons;
  }
}
