import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IFibonacciResult } from '@syncvr-project/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  constructor(private readonly _http: HttpClient) {}

  getFibonacci(n: number) {
    return this._http.get<IFibonacciResult>(`/api/fibonacci`, {
      params: { payload: `${n}` }
    });
  }
}
