export class PersonName {
  name: string;
  PersonName(name: string) {
    this.name = name;
  }

  validName(name: string) {
    if (!/[^a-zA-Z]/.test(name)) {
      return true;
    }
    return false;
  }
}
