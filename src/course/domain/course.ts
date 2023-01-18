import { CourseID } from 'src/shared/value_objects/idcourse';
import { Lesson } from './entities/lesson';
import { UserId } from 'src/shared/value_objects/UserId';
import { ImageCourse } from './value_objects/imagecourse';
import { DescriptionCourse } from './value_objects/descrption';
import { CourseState } from './value_objects/courseState';
import { Coursecategory } from './value_objects/coursecategory';
import { Keyword } from './value_objects/keyword';
import { CourseStateChanged } from './domain_events/events/statecoursechanged';
export class Course {
  private imageCourse?: ImageCourse;
  private descriptCourseIDioCourse?: DescriptionCourse;
  private courseid: CourseID;
  private courseState: CourseState;
  private courseCategory: Coursecategory;
  private Keywords: Array<Keyword>;
  private lessons: Array<Lesson>;
  private students: Array<UserId>;
  private professor: Array<UserId>;
  getstudents() {
    return this.students;
  }
  getstate() {
    return this.courseState.toString;
  }
  getcourseid() {
    return this.courseid;
  }
  constructor(s: [UserId]) {
    this.students = s;
    this.courseid = new CourseID();
  }
  changestate(s: CourseState) {
    this.courseState = s;
    CourseStateChanged.raise(new CourseStateChanged(this));
  }
}
