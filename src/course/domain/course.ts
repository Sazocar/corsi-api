import { CourseID } from 'src/shared/value_objects/idcourse';
import { Lesson } from './entities/lesson';
export class Course {
  private imageCourse: ImageCourse;
  private descriptCourseIDioCourse: DescriptionCourse;
  private courseid: CourseID;
  private courseState: CourseState;
  private courseCategory: Coursecategory;
  private Keywords: Array<Keyword>;
  private lessons: Array<Lesson>;
}
