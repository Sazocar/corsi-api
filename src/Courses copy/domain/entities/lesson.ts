import { LessonId } from './value_objects/idlesson';
export class Lesson {
  private lessonDescrption: DescriptionLesson;
  private videolesson: Videolesson;
  private lessonid: LessonId;
  private comments: Array<CommentLesson>;
}
