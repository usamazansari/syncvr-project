export class ResultDataDTO {
  id: string;
  series: string;
  last: number;

  constructor({ id = '', series = '0,1', last = 1 }: Partial<ResultDataDTO>) {
    this.id = id;
    this.series = series;
    this.last = last;
  }
}
