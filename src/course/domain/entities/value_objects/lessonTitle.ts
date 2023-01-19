export class LessonTitle {
  private _lessonTitle: string;

  constructor(lessonTitle: string) {
    this._lessonTitle = lessonTitle;
  }

  getTitle(): string {
    return this._lessonTitle;
  }
}
