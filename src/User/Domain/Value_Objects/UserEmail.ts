export class UserEmail {
  private email: string;
  UserEmail(email: string) {
    this.email = email;
  }

  get() {
    return this.email;
  }

  isEmailValid(email: string): boolean {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email,
    );
  }

  emailExists(email: string, registeredEmails: string[]) {
    let result = false;
    registeredEmails.forEach((registeredEmail) => {
      if (email === registeredEmail) {
        result = true;
      }
    });
    return result;
  }
}
