import { Iservice } from '../aplication service/Iservice';
import { DecoratorService } from '../aplication service/decorator';
import { Ilogger } from '../port/Ilogger';

class logger<Tservice> extends DecoratorService<Tservice> {
  logger: Ilogger;
  execute(t: Tservice): Iservice<Tservice> {
    super.execute(t);
    this.logger.log(`${t}`);
    return this;
  }
}
