import { CourseID } from 'src/shared/value_objects/idcourse';
import { Course } from './course';
export interface ICourseRepository {
  findCourse(courseId: CourseID);
  findCourses();
  findPublishedCourses();
  findCoursesByCategory(categories: string);
  findCourseByKeywords(keywords: string);
  findLessons();
  //   updateCourse(course: Course);
  //   deleteCourse(course: Course);
}
