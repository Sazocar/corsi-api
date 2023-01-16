import { IEventHandler } from 'src/shared/handlers/handler';
import { DomainEvent } from 'src/shared/events/events';

export class ICoursehandlers extends IEventHandler {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  handle(_e: DomainEvent) {}
}
