export class HistoryDTO {
  timestamp: Date;
  payload: number;
  result: string;

  constructor({
    timestamp = new Date(),
    payload = 1,
    result = ''
  }: Partial<HistoryDTO>) {
    this.timestamp = timestamp;
    this.payload = payload;
    this.result = result;
  }
}
