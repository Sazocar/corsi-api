import { CourseID } from 'src/shared/value_objects/idcourse';
import { Lesson } from './entities/lesson';
import { IMemento } from 'src/shared/IMemento';
import { CourseMemento } from './CourseMemento';
export class Course {
  private imageCourse: ImageCourse;
  private descriptionCourse: DescriptionCourse;
  private courseid: CourseID;
  private courseState: CourseState;
  private courseCategory: Coursecategory;
  private keywords: Array<Keyword>;
  private lessons: Array<Lesson>;

  constructor();
  constructor(snapshot: CourseMemento);
  constructor(snapshot?: CourseMemento) {
    if (snapshot) {
      this.imageCourse = snapshot.getImageCourse();
      this.descriptionCourse = snapshot.getDescriptionCourse();
      this.courseid = snapshot.getCourseId();
      this.courseState = snapshot.getCourseState();
      this.courseCategory = snapshot.getCourseCategory();
      this.keywords = snapshot.getKeywords();
      this.lessons = snapshot.getLesson();
    }
  }

  public save(): IMemento {
    return new CourseMemento(this);
  }

  public createCourseFromMemento(courseMemento: CourseMemento) {
    return new Course(courseMemento);
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

  public setImageCourse(imageCourse: ImageCourse): void {
    this.imageCourse = imageCourse;
  }

  public setDescriptionCourse(descriptionCourse: DescriptionCourse): void {
    this.descriptionCourse = descriptionCourse;
  }

  public setCourseId(courseId: CourseID) {
    this.courseid = courseId;
  }

  public setCourseState(courseState: CourseState) {
    this.courseState = courseState;
  }

  public setCourseCategory(courseCategory: Coursecategory) {
    this.courseCategory = courseCategory;
  }

  public setKeywords(keywords: Array<Keyword>): void {
    this.keywords = keywords;
  }

  public setLessons(lessons: Array<Lesson>): void {
    this.lessons = lessons;
  }
}
