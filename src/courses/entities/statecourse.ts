/*import { Course } from './course';
import { Student } from 'src/person/entities/student';
import { PersonService } from 'src/person/person.services/person.services.service';
import { Person } from 'src/person/entities/person';
import { SuscribeService } from 'src/suscribe/service/service.service';
export interface StateCourse {
  Suscribe(idperson: number, idcourse: number): string;
}

export class Published implements StateCourse {
  constructor(private service: SuscribeService) {}
  state = 'Published';
  Suscribe(idperson: number, idcourse: number) {
    this.service.suscribe(idperson, idcourse);
    return 'curso suscrito exitosamente';
  }
}

export class Created implements StateCourse {
  state = 'Created';
  Suscribe(idperson: number, idcourse: number) {
    return 'no se puede suscribir';
  }
}

export class Deleted implements StateCourse {
  state = 'Deleted';
  Suscribe(idperson: number, idcourse: number) {
    return 'no se puede suscribir';
  }
}
export class Suspended implements StateCourse {
  state = 'Suspended';
  Suscribe(idperson: number, idcourse: number) {
    return 'no se puede suscribir';
  }
}
*/
