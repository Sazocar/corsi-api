import { UserId } from 'src/shared/value_objects/UserId';
import { User } from './User';

export interface IrepositoryUser {
  getAll(): Array<User>;
  getById(id: UserId): User;
  add(user: User): void;
  delete(user: User): void;
  update(id: UserId, user: User): void;
}
