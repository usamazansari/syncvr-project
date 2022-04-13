import { Injectable } from '@nestjs/common';

import {
  FibonacciResult,
  ResultDataDTO,
  ResultDataModel
} from '@syncvr-project/domain';

@Injectable()
export class AppService {
  #result: FibonacciResult = new FibonacciResult({});
  #id = '';

  getFibonacci(n = 2): FibonacciResult {
    this.#id = `${n}`;
    const series = [0, 1];
    for (let i = 2; i <= n - 1; i++) {
      series.push(series[i - 1] + series[i - 2]);
    }
    this.#result = new FibonacciResult({ series, last: series.at(-1) });
    return this.#result;
  }

  updateId(id = ''): void {
    this.#id = id;
  }

  getId(): string {
    return this.#id;
  }

  getResultDTO(): ResultDataDTO {
    return new ResultDataDTO({
      id: this.#id,
      series: this.#result.series.join(),
      last: this.#result.last
    });
  }

  getResult(dto: ResultDataDTO): ResultDataModel {
    return new ResultDataModel({
      id: dto.id,
      series: dto.series.split(',').map(Number),
      last: dto.last
    });
  }
}
