import { Course } from './course';
import { Student } from 'src/person/entities/student';
import { PersonService } from 'src/person/person.services/person.services.service';
import { Person } from 'src/person/entities/person';
export interface StateCourse {
  suscribe(student: Student, course: Course);
}

export class Published implements StateCourse {
  constructor(private service: PersonService) {}
  suscribe(student: Student, course: Course) {
    this.service.suscribeService(student, course);
  }
}

export class Created implements StateCourse {
  suscribe(student: Student, course: Course) {
    return 'no se puede suscribir';
  }
}

export class Deleted implements StateCourse {
  suscribe(student: Student) {
    return 'no se puede suscribir';
  }
}
export class Suspended implements StateCourse {
  suscribe(student: Student) {
    return 'no se puede suscribir';
  }
}
