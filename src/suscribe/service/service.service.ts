import { Injectable } from '@nestjs/common';

@Injectable()
export class SuscribeService {
  suscribe(idperson: number, idcourse: number) {
    return 'hello';
  }
}
