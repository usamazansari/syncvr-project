export class HistoryDataDTO {
  timestamp: Date;
  payload: number;

  constructor({
    timestamp = new Date(),
    payload = 0
  }: Partial<HistoryDataDTO>) {
    this.timestamp = timestamp;
    this.payload = payload;
  }
}
