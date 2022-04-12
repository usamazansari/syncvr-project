import { Injectable } from '@nestjs/common';

import { FibonacciResult, ResultDataDTO } from '@syncvr-project/domain';

@Injectable()
export class AppService {
  #result: FibonacciResult = new FibonacciResult({});

  getFibonacci(n = 2): FibonacciResult {
    const series = [0, 1];
    for (let i = 2; i <= n - 1; i++) {
      series.push(series[i - 1] + series[i - 2]);
    }
    this.#result = new FibonacciResult({ series, last: series.at(-1) });
    return this.#result;
  }

  getResultDTO(): ResultDataDTO {
    return new ResultDataDTO({
      series: this.#result.series.join(),
      last: this.#result.last
    });
  }

  getResult(dto: ResultDataDTO): FibonacciResult {
    return new FibonacciResult({
      series: dto.series.split(',').map(Number),
      last: dto.last
    });
  }
}
