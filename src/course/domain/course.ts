import { CourseID } from 'src/shared/value_objects/idcourse';
import { Lesson } from './entities/lesson';
import { IMemento } from 'src/shared/IMemento';
import { CourseMemento } from './CourseMemento';
export class Course {
  private imageCourse: ImageCourse;
  private descriptCourseIDioCourse: DescriptionCourse;
  private courseid: CourseID;
  private courseState: CourseState;
  private courseCategory: Coursecategory;
  private keywords: Array<Keyword>;
  private lessons: Array<Lesson>;

  public save(): IMemento {
    return new CourseMemento(this);
  }

  public getImageCourse(): ImageCourse {
    return this.imageCourse;
  }

  public getDescriptionCourse(): DescriptionCourse {
    return this.descriptCourseIDioCourse;
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
