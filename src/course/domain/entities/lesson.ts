import { LessonId } from './value_objects/idlesson';
import { LessonTitle } from './value_objects/lessonTitle';
export class Lesson {
  private _lessonDescription: DescriptionLesson;
  private _videolesson: Videolesson;
  private _lessonid: LessonId;
  private _lessonTitle: LessonTitle;
  //private _comments: Array<CommentLesson>;

  constructor();
  constructor(lesson: Lesson);
  constructor(lesson?: Lesson) {
    if (lesson) {
      this._lessonDescription = lesson._lessonDescription;
      this._videolesson = lesson._videolesson;
      this._lessonid = lesson._lessonid;
      this._lessonTitle = lesson._lessonTitle;
      //this._comments = lesson._comments;
    }
  }

  public getlessonDescription(): DescriptionLesson {
    return this._lessonDescription;
  }
  public setlessonDescription(value: DescriptionLesson) {
    this._lessonDescription = value;
  }

  public getLessonTitle(): LessonTitle {
    return this._lessonTitle;
  }

  public getvideolesson(): Videolesson {
    return this._videolesson;
  }
  public setvideolesson(value: Videolesson) {
    this._videolesson = value;
  }

  public getlessonid(): LessonId {
    return this._lessonid;
  }
  public setlessonid(value: LessonId) {
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
