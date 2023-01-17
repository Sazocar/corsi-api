class DescriptionLesson {
  private description: string;
  constructor(description: string) {
    if (description.length <= 2000) {
      this.description = description;
    } else {
      throw console.error('descripcion muy larga');
    }
  }
  DescriptionLesson(description: string) {
    if (description.length <= 2000) {
      this.description = description;
    } else {
      throw console.error('descripcion muy larga');
    }
  }
}
