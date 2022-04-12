import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { FibonacciResult } from '@syncvr-project/domain';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  constructor(private readonly _http: HttpClient) {}

  getFibonacci(n: number) {
    return this._http.get<FibonacciResult>(`/api/fibonacci`, {
      params: { payload: `${n}` }
    });
  }
}
