import { randomUUID } from 'crypto';
export class LessonId {
  private id: string;
  LessonID() {
    this.id = randomUUID();
  }
}
