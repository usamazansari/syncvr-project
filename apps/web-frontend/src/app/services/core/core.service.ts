import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HistoryData, ResultData } from '@syncvr-project/domain';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  constructor(private readonly _http: HttpClient) {}

  fetchFibonacci(n: number): Observable<ResultData> {
    return this._http.post<ResultData>(`/api/result/create`, {
      payload: `${n}`
    });
  }

  writeToDB(payload: number): Observable<HistoryData> {
    return this._http.post<HistoryData>(`/api/history/create`, {
      payload
    });
  }

  fetchHistory(): Observable<HistoryData[]> {
    return this._http.get<HistoryData[]>(`/api/history/entries`);
  }

  fetchResult(n: number): Observable<ResultData> {
    return this._http.get<ResultData>(`/api/result/${n}`);
  }
}
