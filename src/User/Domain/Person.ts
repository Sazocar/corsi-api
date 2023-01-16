import { PersonBirthDate } from './Value_Objects/AccountState';
import { PersonId } from '../../shared/value_objects/PersonId';
import { PersonLastName } from './Value_Objects/UserEmail';
import { PersonName } from './Value_Objects/PersonName';
export abstract class Person {
  private personId: PersonId;
  private personName: PersonName;
  private personLastName: PersonLastName;
  private birthDate: PersonBirthDate;
}