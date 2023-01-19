import { EventHandler } from '../handlers/handler';
export abstract class DomainEvent {
  time: Date;
  static handlers: Array<EventHandler>;
  static raise(e: DomainEvent) {
    for (const handler of this.handlers) {
      handler.handle(e);
    }
  }
  static AddHandler(h: EventHandler) {
    this.handlers.push(h);
  }
}
