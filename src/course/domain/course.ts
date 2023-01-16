import { CourseID } from 'src/shared/value_objects/idcourse';
import { Lesson } from './entities/lesson';
import { UserId } from 'src/shared/value_objects/UserId';
class Course {
  private imageCourse: ImageCourse;
  private descriptCourseIDioCourse: DescriptionCourse;
  private courseid: CourseID;
  private courseState: CourseState;
  private courseCategory: Coursecategory;
  private Keywords: Array<Keyword>;
  private lessons: Array<Lesson>;
  private students: Array<UserId>;
  private professor: Array<UserId>;
}
