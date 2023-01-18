import { Course } from 'src/course/domain/course';
import { Icourserepository } from 'src/course/domain/courserepository';
import { UserId } from 'src/shared/value_objects/UserId';
import { CourseID } from 'src/shared/value_objects/idcourse';

export class MemoryImpCourses implements Icourserepository {
  courses = [new Course([new UserId()])];
  getAll(): Course[] {
    return this.courses;
  }
  getById(id: CourseID): Course {
    for (const course of this.courses) {
      if (course.getcourseid() == id) {
        return course;
      }
    }
  }
  add(user: Course): void {
    throw new Error('Method not implemented.');
  }
  delete(user: Course): void {
    throw new Error('Method not implemented.');
  }
  update(id: CourseID, user: Course): void {
    throw new Error('Method not implemented.');
  }
}
