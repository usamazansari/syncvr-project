interface IHistoryTableView {
  index: number;
  timestamp: Date;
  value: number;
}

export class HistoryTableView implements IHistoryTableView {
  index: number;
  timestamp: Date;
  value: number;
  constructor({
    index = 0,
    timestamp = new Date(),
    value = 0
  }: Partial<IHistoryTableView>) {
    this.index = index;
    this.timestamp = timestamp;
    this.value = value;
  }
}
