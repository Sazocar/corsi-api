import { PersonBirthDate } from '../../Person/Domain/Value_Objects/PersonBirthDate';
import { PersonId } from '../../shared/value_objects/PersonId';
import { PersonLastName } from '../../Person/Domain/Value_Objects/PersonLastName';
import { PersonName } from '../../Person/Domain/Value_Objects/PersonName';
export abstract class Person {
  private personId: PersonId;
  private personName: PersonName;
  private personLastName: PersonLastName;
  private birthDate: PersonBirthDate;
}