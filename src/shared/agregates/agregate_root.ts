import { DomainEvent } from '../events/events';
abstract class AgregateRoot {
  readonly events: Array<DomainEvent>;
  addEvent(e: Event) {
    this.events.push();
  }
}
