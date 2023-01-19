import { randomUUID } from 'crypto';
export class PersonId {
  id: string;
  PersonId() {
    this.id = randomUUID();
  }
}
