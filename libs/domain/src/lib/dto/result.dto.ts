export class ResultDTO {
  id: string;
  series: string;
  last: number;

  constructor({ id = '', series = '0,1', last = 1 }: Partial<ResultDTO>) {
    this.id = id;
    this.series = series;
    this.last = last;
  }
}
