import { DomainEvent } from '../events/events';

export abstract class IEventHandler {
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  handle(e: DomainEvent) {}
}
