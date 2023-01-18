import { UserId } from 'src/shared/value_objects/UserId';
import { IrepositoryUser } from '../Domain/IrepositoryUser';
import { User } from '../Domain/User';
import { UserEmail } from '../Domain/Value_Objects/userEmail';

export class MemoryImpIuser implements IrepositoryUser {
  users = [new User(new UserEmail('giovax1110@gmail.com'))];
  getAll(): User[] {
    return this.users;
  }
  getById(id: UserId): User {
    for (const user of this.users) {
      if (user.getUserId() == id) {
        return user;
      }
    }
  }
  add(user: User): void {
    throw new Error('Method not implemented.');
  }
  delete(user: User): void {
    throw new Error('Method not implemented.');
  }
  update(id: UserId, user: User): void {
    throw new Error('Method not implemented.');
  }
}
