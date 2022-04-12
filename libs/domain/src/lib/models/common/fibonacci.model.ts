export interface IFibonacciResult {
  series: number[];
  last?: number;
}

export class FibonacciResult implements IFibonacciResult {
  series: number[] = [];
  last?: number;

  constructor({ series = [0, 1], last = 1 }: Partial<IFibonacciResult>) {
    this.series = series;
    this.last = last;
  }
}
