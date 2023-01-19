import { randomUUID } from 'crypto';

export class UserId {
  id: string;
  UserId() {
    this.id = randomUUID();
  }
}
