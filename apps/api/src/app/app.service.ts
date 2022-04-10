import { Injectable } from '@nestjs/common';
import { IFibonacciResult } from '@syncvr-project/interfaces';

@Injectable()
export class AppService {
  getFibonacci(n = 2): IFibonacciResult {
    const series = [0, 1];
    for (let i = 2; i <= n - 1; i++) {
      series.push(series[i - 1] + series[i - 2]);
    }
    return {
      series,
      last: series.at(-1)
    };
  }
}
