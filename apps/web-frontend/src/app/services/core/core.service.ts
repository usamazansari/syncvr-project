import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ResultDataModel } from '@syncvr-project/domain';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  constructor(private readonly _http: HttpClient) {}

  processFibonacci(n: number) {
    return this._http.post<ResultDataModel>(`/api/history-data/entry`, {
      payload: `${n}`
    });
  }
}
