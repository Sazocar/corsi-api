import { Injectable } from '@nestjs/common';
import { PersonService } from 'src/person/services/person.service';
import { CoursesService } from 'src/courses/services/courses.service';

@Injectable()
export class SuscribeService {
  suscribe(idperson: number, idcourse: number) {
    return 'hello';
  }
}
