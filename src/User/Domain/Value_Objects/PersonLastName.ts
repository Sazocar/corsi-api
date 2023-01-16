export class PersonLastName {
  lastName: string;
  PersonLastName(lastName: string) {
    this.lastName = lastName;
  }

  validLastName(name: string) {
    if (!/[^a-zA-Z]/.test(name)) {
      return true;
    }
    return false;
  }
}