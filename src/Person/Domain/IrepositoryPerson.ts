import { PersonId } from 'src/shared/value_objects/PersonId';
import { Person } from './Person';

export interface IrepositoryPerson {
  getAll(): Array<Person>;
  getById(id: PersonId): Person;
  add(person: Person): void;
  delete(person: Person): void;
  update(id: PersonId, person: Person): void;
}
