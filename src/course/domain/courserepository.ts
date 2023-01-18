import { CourseID } from 'src/shared/value_objects/idcourse';
import { Course } from './course';

export interface Icourserepository {
  getAll(): Array<Course>;
  getById(id: CourseID): Course;
  add(user: Course): void;
  delete(user: Course): void;
  update(id: CourseID, user: Course): void;
}
