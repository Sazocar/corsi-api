import { LessonId } from './value_objects/idlesson';
export class Lesson {
  private lessonDescrption: DescriptionLesson;
  private videolesson: Videolesson;
  private lessonid: LessonId;
  private comments: Array<CommentLesson>;

  constructor(lesson: Lesson) {
    this.lessonDescrption = lesson.lessonDescrption;
    this.videolesson = lesson.videolesson;
    this.lessonid = lesson.lessonid;
    this.comments = lesson.comments;
  }
}
