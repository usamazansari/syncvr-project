import { Injectable } from '@nestjs/common';

import { Result, ResultData, ResultDataDTO } from '@syncvr-project/domain';

@Injectable()
export class AppService {
  #result: Result = new Result({});
  #id = '';

  getResult(n = 2): Result {
    this.#id = `${n}`;
    const series = [0, 1];
    for (let i = 2; i <= n - 1; i++) {
      series.push(series[i - 1] + series[i - 2]);
    }
    this.#result = new Result({ series, last: series.at(-1) });
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

  getResultData(dto: ResultDataDTO): ResultData {
    return new ResultData({
      id: dto.id,
      series: dto.series.split(',').map(Number),
      last: dto.last
    });
  }
}
