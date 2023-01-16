import { randomUUID } from 'crypto';

export class CourseID {
  private id: string;

  constructor();
  constructor(id: string);
  constructor(id?: string) {
    if (id) {
      this.id = id;
    } else {
      this.id = randomUUID();
    }
  }

  getId() {
    return this.id;
  }
}
