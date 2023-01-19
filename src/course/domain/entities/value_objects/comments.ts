class CommentLesson {
  content: string;
  constructor(s: string) {
    if (s.length <= 99999999) {
      this.content = s;
    } else {
      throw console.error('texto muy largo');
    }
  }
}
