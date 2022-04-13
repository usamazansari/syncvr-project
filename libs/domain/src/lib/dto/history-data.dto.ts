export class HistoryDataDTO {
  timestamp: Date;
  payload: number;
  result: string;

  constructor({
    timestamp = new Date(),
    payload = 1,
    result = ''
  }: Partial<HistoryDataDTO>) {
    this.timestamp = timestamp;
    this.payload = payload;
    this.result = result;
  }
}
