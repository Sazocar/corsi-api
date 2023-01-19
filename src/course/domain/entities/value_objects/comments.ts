class CommentLesson {
  content: string;
  constructor(s: string) {
    if (s.length <= 250) {
      this.content = s;
    } else {
      throw console.error('texto muy largo');
    }
  }
}
