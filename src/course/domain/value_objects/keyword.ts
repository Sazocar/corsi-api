class Keyword {
  keyword: string;
  constructor(s: string) {
    if (s.length <= 25) {
      this.keyword = s;
    } else {
      throw console.error('palabra demasiado grande');
    }
  }
}
