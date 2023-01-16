import { Course } from 'src/course/infrastructure/entities/course';
import { DomainEvent } from 'src/shared/events/events';

export class CourseStateChanged extends DomainEvent {
  course: Course;
  constructor(c: Course, s: CourseState) {
    super();
    c.state = s.toString();
    this.course = c;
    this.time = new Date();
  }
}
