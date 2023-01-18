import { UserEmail } from 'src/User/Domain/Value_Objects/userEmail';
import { Course } from '../../course';
import { DomainEvent } from 'src/shared/events/events';
import { GetEmails } from '../../domain service/getemails';
import { IrepositoryUser } from 'src/User/Domain/IrepositoryUser';
import { Icourserepository } from '../../courserepository';
import { User } from 'src/auth/entities/user.entity';

export class CourseStateChanged extends DomainEvent {
  course: Course;
  emails: Array<UserEmail>;
  constructor(c: Course) {
    super();
    this.course = c;
    this.time = new Date();
  }
}
