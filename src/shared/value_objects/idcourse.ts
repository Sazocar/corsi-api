import { randomUUID } from 'crypto';

export class CourseID {
  private id: string;
  constructor() {
    this.id = randomUUID();
  }
}
