class DescriptionLesson {
  private description: string;
  DescriptionLesson(description: string) {
    if (description.length <= 2000) {
      this.description = description;
    } else {
      throw console.error('descripcion muy larga');
    }
  }
}
