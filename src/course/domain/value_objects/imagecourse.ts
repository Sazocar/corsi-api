class ImageCourse {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  ImageCourse(url: string) {
    this.url = url;
  }
  getImage(): string {
    return this.url;
  }
}
