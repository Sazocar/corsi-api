import { DomainEvent } from '../events/events';

export abstract class EventHandler {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handle(e: DomainEvent) {}
}
