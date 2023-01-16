import { IMemento } from 'src/shared/IMemento';
import { Lesson } from './entities/lesson';
import { CourseID } from 'src/shared/value_objects/idcourse';
import { Course } from './course';

export class CourseMemento implements IMemento {
  course: Course;

  constructor(course: Course) {
    this.course = course;
  }

  getState() {
    return this.course;
  }
}
