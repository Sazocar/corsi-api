import { randomUUID } from 'crypto';
export class LessonId {
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
  getId(): string {
    return this.id;
  }
}
