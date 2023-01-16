import { PersonId } from 'src/shared/value_objects/PersonId';
import { UserPassword } from './Value_Objects/PersonName';
import { UserEmail } from './Value_Objects/PersonLastName';

export class User {
  private userEmail: UserEmail;
  private userPassword: UserPassword;
  private personId: PersonId;
  private accountState: AccountState;
}
