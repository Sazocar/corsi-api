export interface Iservice<Tservice> {
  execute(t: Tservice): Iservice<Tservice>;
}
