import { CourseID } from 'src/shared/value_objects/idcourse';
import { Lesson } from './entities/lesson';
import { IMemento } from 'src/shared/IMemento';
import { CourseMemento } from './CourseMemento';
import { CourseTitle } from './value_objects/CourseTitle';
import { CourseSubTitle } from './value_objects/CourseSubTitle';
export class Course {
  private imageCourse: ImageCourse;
  private descriptionCourse: DescriptionCourse;
  private courseid: CourseID;
  private courseTitle: CourseTitle;
  private courseSubTitle: CourseSubTitle;
  private courseState: CourseState;
  private courseCategory: Coursecategory;
  private keyword: Keyword;
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
      //this.keywords = snapshot.getKeywords();
      this.lessons = snapshot.getLesson();
    }
  }

  public save(): IMemento {
    return new CourseMemento(this);
  }

  public createCourseFromMemento(courseMemento: CourseMemento) {
    return new Course(courseMemento);
  }

  public getTitle(): CourseTitle {
    return this.courseTitle;
  }

  public getKeyword(): Keyword {
    return this.keyword;
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

  // public getKeywords(): Array<Keyword> {
  //   return this.keywords;
  // }

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

  // public setKeywords(keywords: Array<Keyword>): void {
  //   this.keywords = keywords;
  // }

  public setLessons(lessons: Array<Lesson>): void {
    this.lessons = lessons;
  }

  static create(
    imageCourse: string,
    descriptionCourse: string,
    courseid: string,
    courseTitle: string,
    courseSubTitle: string,
    courseState: string,
    courseCategory: string,
    keyword: string,
    lessons: Array<Lesson>,
  ): Course {
    const courseDomain = new Course();
    if (imageCourse == null) {
      courseDomain.imageCourse = new ImageCourse('no tengo enlace');
    }
    courseDomain.imageCourse = new ImageCourse(imageCourse);
    courseDomain.descriptionCourse = new DescriptionCourse(descriptionCourse);
    courseDomain.courseid = new CourseID(courseid);
    courseDomain.courseTitle = new CourseTitle(courseTitle);
    courseDomain.courseSubTitle = new CourseSubTitle(courseSubTitle);
    //Esto se puede hacer con un patron estado
    if (courseState == 'Created') {
      courseDomain.courseState = CourseState.Created;
    }
    if (courseState == 'Deleted') {
      courseDomain.courseState = CourseState.Deleted;
    }
    if (courseState == 'Published') {
      courseDomain.courseState = CourseState.Published;
    }
    if (courseState == 'Suspended') {
      courseDomain.courseState = CourseState.Suspended;
    }
    if (courseCategory == 'programacion') {
      courseDomain.courseCategory = Coursecategory.programacion;
    }
    if (courseCategory == 'idiomas') {
      courseDomain.courseCategory = Coursecategory.idiomas;
    }
    if (courseCategory == 'matematicas') {
      courseDomain.courseCategory = Coursecategory.matematicas;
    }
    if (courseCategory == 'finanzas') {
      courseDomain.courseCategory = Coursecategory.finanzas;
    }
    courseDomain.keyword = new Keyword(keyword);
    courseDomain.lessons = lessons;

    return courseDomain;
  }
}
