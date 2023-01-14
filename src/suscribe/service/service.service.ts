import { Injectable } from '@nestjs/common';
import { PersonService } from 'src/person/services/person.service';

@Injectable()
export class SuscribeService {
  suscribe(idperson: number, idcourse: number) {
    return 'hello';
  }
}
