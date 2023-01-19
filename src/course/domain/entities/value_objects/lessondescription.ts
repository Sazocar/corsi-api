export class DescriptionLesson {
  private description: string;
  constructor(description: string) {
    if (description.length <= 99999999) {
      this.description = description;
    } else {
      throw console.error('descripcion muy larga');
    }
  }
  DescriptionLesson(description: string) {
    if (description.length <= 99999999) {
      this.description = description;
    } else {
      throw console.error('descripcion muy larga');
    }
  }
  getDescription(): string {
    return this.description;
  }
}
