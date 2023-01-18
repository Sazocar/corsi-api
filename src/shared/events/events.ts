import { IEventHandler } from '../handlers/handler';
export abstract class DomainEvent {
  time: Date;
  static handlers: Array<IEventHandler>;
  static raise(e: DomainEvent) {
    for (const handler of this.handlers) {
      handler.handle(e);
    }
  }
  static AddHandler(h: IEventHandler) {
    this.handlers.push(h);
  }
}
