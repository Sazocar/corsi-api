import { Iservice } from './Iservice';

export abstract class DecoratorService<Tservice> implements Iservice<Tservice> {
  wrapee: Iservice<Tservice>;
  constructor(s: Iservice<Tservice>) {
    this.wrapee = s;
  }
  execute(t: Tservice): Iservice<Tservice> {
    this.wrapee.execute(t);
    return this.wrapee;
  }
}
