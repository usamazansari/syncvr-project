import { Result } from '..';

export class ResultData extends Result {
  id: string;
  override series: number[];
  override last: number;

  constructor({ id = '', series = [0, 1], last = 1 }: Partial<ResultData>) {
    super({ series, last });
    this.id = id;
    this.series = series;
    this.last = last;
  }
}
