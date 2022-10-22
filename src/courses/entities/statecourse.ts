import { Course } from './course';
import { student } from 'src/person/entities/student';
import { PersonServicesService } from 'src/person/person.services/person.services.service';
import { person } from 'src/person/entities/person';
export interface statecourse {
  suscribe(student: student, course: Course);
}

export class published implements statecourse {
  constructor(private service: PersonServicesService) {}
  suscribe(student: student, course: Course) {
    this.service.suscribeservice(student, course);
  }
}

export class created implements statecourse {
  suscribe(student: student, course: Course) {
    return 'no se puede suscribir';
  }
}

export class deleted implements statecourse {
  suscribe(student: student) {
    return 'no se puede suscribir';
  }
}
export class suspended implements statecourse {
  suscribe(student: student) {
    return 'no se puede suscribir';
  }
}
