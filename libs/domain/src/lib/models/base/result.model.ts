interface IResult {
  series: number[];
  last?: number;
}

export class Result implements IResult {
  series: number[] = [];
  last?: number;

  constructor({ series = [0, 1], last = 1 }: Partial<IResult>) {
    this.series = series;
    this.last = last;
  }
}
