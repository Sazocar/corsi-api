import { LessonId } from './value_objects/idlesson';
export class Lesson {
  private _lessonDescription: DescriptionLesson;
  private _videolesson: Videolesson;
  private _lessonid: LessonId;
  //private _comments: Array<CommentLesson>;

  constructor();
  constructor(lesson: Lesson);
  constructor(lesson?: Lesson) {
    if (lesson) {
      this._lessonDescription = lesson._lessonDescription;
      this._videolesson = lesson._videolesson;
      this._lessonid = lesson._lessonid;
      //this._comments = lesson._comments;
    }
  }

  public get lessonDescription(): DescriptionLesson {
    return this._lessonDescription;
  }
  public set lessonDescription(value: DescriptionLesson) {
    this._lessonDescription = value;
  }

  public get videolesson(): Videolesson {
    return this._videolesson;
  }
  public set videolesson(value: Videolesson) {
    this._videolesson = value;
  }

  public get lessonid(): LessonId {
    return this._lessonid;
  }
  public set lessonid(value: LessonId) {
    this._lessonid = value;
  }

  //public get comments(): Array<CommentLesson> {
  //  return this._comments;
  //}
  //public set comments(value: Array<CommentLesson>) {
  //  this._comments = value;
  //}
  static create(
    lessonDescription: string,
    videolesson: string,
    lessonid: string,
  ): Lesson {
    const lessonDomain = new Lesson();
    lessonDomain._lessonDescription = new DescriptionLesson(lessonDescription);
    lessonDomain._videolesson = new Videolesson(videolesson);
    lessonDomain._lessonid = new LessonId(lessonid);
    return lessonDomain;
  }
}
