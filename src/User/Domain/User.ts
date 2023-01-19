import { PersonId } from 'src/shared/value_objects/PersonId';
import { UserPassword } from './Value_Objects/UserPassword';
import { UserEmail } from './Value_Objects/userEmail';
import { AccountState } from './Value_Objects/AccountState';

export class User {
  private userEmail: UserEmail;
  private userPassword: UserPassword;
  private personId: PersonId;
  private accountState: AccountState;
}
