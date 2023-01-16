import { PersonBirthDate } from './Value_Objects/PersonBirthDate';
import { PersonId } from '../../shared/value_objects/PersonId';
import { PersonLastName } from './Value_Objects/PersonLastName';
import { PersonName } from './Value_Objects/PersonName';
export abstract class Person {
  private personId: PersonId;
  private personName: PersonName;
  private personLastName: PersonLastName;
  private birthDate: PersonBirthDate;
}