class DescriptionCourse {
  private descriptionCourse: string;
  constructor(description: string) {
    if (description.length <= 250) {
      this.descriptionCourse = description;
    } else {
      throw console.error('la descrpcion es muy larga');
    }
  }
  getDescription(): string {
    return this.descriptionCourse;
  }
}
