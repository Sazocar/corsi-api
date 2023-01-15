import { CourseID } from 'src/shared/value_objects/idcourse';
import { Course } from './course';
export interface ICourseRepository {
  createCourse(): void;
  findCourse(course: Course): Course;
  findCourses(course: Course): Array<Course>;
  findCourseByCourseId(courseId: CourseID): Course;
  findPublishedCourses(): Array<Course>;
  findCoursesByCategory(category: string): Array<Course>;
  findCourseByKeywords(keywords: Array<Keyword>): Array<Course>;
}
