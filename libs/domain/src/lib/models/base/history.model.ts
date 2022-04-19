interface IHistory {
  timestamp: Date;
  payload: number;
  result: string;
}

export class History implements IHistory {
  timestamp: Date;
  payload: number;
  result: string;

  constructor({ timestamp = new Date(), payload = 1 }: Partial<IHistory>) {
    this.timestamp = timestamp;
    this.payload = payload;
    this.result = `${payload}`;
  }
}
