import { AccountState } from './Value_Objects/AccountState';
import { UserPassword } from './Value_Objects/UserPassword';
import { UserEmail } from './Value_Objects/userEmail';
import { UserId } from 'src/shared/value_objects/UserId';

export class User {
  private iduser: UserId;
  private userEmail: UserEmail;
  private userPassword: UserPassword;
  private accountState: AccountState;
  getUserEmail() {
    return this.userEmail;
  }
  getUserId() {
    return this.iduser;
  }
  constructor(s: UserEmail) {
    this.userEmail = s;
    this.iduser = new UserId();
  }
}
