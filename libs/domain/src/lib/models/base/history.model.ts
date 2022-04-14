interface IHistory {
  timestamp: Date;
  payload: number;
}

export class History implements IHistory {
  timestamp: Date;
  payload: number;

  constructor({ timestamp = new Date(), payload = 1 }: Partial<IHistory>) {
    this.timestamp = timestamp;
    this.payload = payload;
  }
}
