import { FibonacciResult } from '.';

export class ResultDataModel extends FibonacciResult {
  id: string;
  override series: number[];
  override last: number;

  constructor({
    id = '',
    series = [0, 1],
    last = 1
  }: Partial<ResultDataModel>) {
    super({ series, last });
    this.id = id;
    this.series = series;
    this.last = last;
  }
}
