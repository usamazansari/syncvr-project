export class HistoryDTO {
  timestamp: Date;
  payload: number;

  constructor({ timestamp = new Date(), payload = 1 }: Partial<HistoryDTO>) {
    this.timestamp = timestamp;
    this.payload = payload;
  }
}
