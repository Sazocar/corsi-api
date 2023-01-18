export class CourseTitle {
  private _courseTitle: string;

  constructor(courseTitle: string) {
    this._courseTitle = courseTitle;
  }

  getTitle(): string {
    return this._courseTitle;
  }
}
