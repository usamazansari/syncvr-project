export class ResultDataDTO {
  series: string;
  last: number;

  constructor({ series = '0,1', last = 1 }: Partial<ResultDataDTO>) {
    this.series = series;
    this.last = last;
  }
}
