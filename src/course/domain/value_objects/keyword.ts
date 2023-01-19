export class Keyword {
  keyword: string;
  constructor(s: string) {
    if (s.length <= 99999999) {
      this.keyword = s;
    } else {
      throw console.error('palabra demasiado grande');
    }
  }
  getKeyword(): string {
    return this.keyword;
  }
}
