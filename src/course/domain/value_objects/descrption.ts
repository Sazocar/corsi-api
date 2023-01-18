export class DescriptionCourse {
  private descriptionCourse: string;
  DescriptionCourse(description: string) {
    if (description.length <= 250) {
      this.descriptionCourse = description;
    } else {
      throw console.error('la descrpcion es muy larga');
    }
  }
}
