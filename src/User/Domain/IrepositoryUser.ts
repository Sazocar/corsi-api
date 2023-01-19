import { UserId } from 'src/shared/value_objects/UserId';
import { User } from './User';

interface IrepositoryUser {
  getAll(): Array<User>;
  getById(id: UserId): Array<User>;
  add(user: User): void;
  delete(user: User): void;
  update(id: UserId, user: User): void;
}
