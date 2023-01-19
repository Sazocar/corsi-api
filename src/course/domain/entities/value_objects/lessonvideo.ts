export class Videolesson {
  private url: string;
  constructor(url: string) {
    this.url = url;
  }
  Videolesson(url: string) {
    this.url = url;
  }
  getVideo(): string {
    return this.url;
  }
}
