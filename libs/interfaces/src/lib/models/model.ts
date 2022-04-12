export interface IHistoryData {
  timestamp: Date;
  value: number;
}

export class HistoryData implements IHistoryData {
  timestamp: Date;
  value: number;

  constructor({ timestamp = new Date(), value = 0 }: Partial<IHistoryData>) {
    this.timestamp = new Date(timestamp);
    this.value = value;
  }
}
