import { History } from '..';

export class HistoryData extends History {
  id: string;

  constructor({
    id = '',
    timestamp = new Date(),
    payload = 1
  }: Partial<HistoryData>) {
    super({ timestamp, payload });
    this.id = id;
  }
}
