import { Injectable } from '@nestjs/common';
import { PersonService } from 'src/person/person.services/person.services.service';
import { CoursesService } from 'src/courses/services/courses.service';

@Injectable()
export class SuscribeService {
  suscribe(idperson: number, idcourse: number) {
    return 'hello';
  }
}
