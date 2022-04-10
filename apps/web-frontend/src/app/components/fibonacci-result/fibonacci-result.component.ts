import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IFibonacciResult } from '@syncvr-project/interfaces';

import { CoreService } from '../../services';

@Component({
  selector: 'syncvr-project-fibonacci-result',
  templateUrl: './fibonacci-result.component.html',
  styleUrls: ['./fibonacci-result.component.scss']
})
export class FibonacciResultComponent implements OnInit {
  private _input$ = new BehaviorSubject<number | null>(null);

  @Input()
  set input(value: number | null) {
    this._input$.next(value);
  }
  get input() {
    return this._input$.getValue();
  }

  private _result$ = new BehaviorSubject<IFibonacciResult>({
    series: [] as number[]
  });

  set result(value: IFibonacciResult) {
    this._result$.next(value);
  }
  get result() {
    return this._result$.getValue();
  }

  isSeriesExpanded = false;

  constructor(private readonly _service: CoreService) {}

  ngOnInit(): void {
    this._input$.subscribe(input => {
      if (input !== null) {
        this._service.getFibonacci(input).subscribe(result => {
          this._result$.next(result);
        });
      }
    });
  }

  toggleSeriesView(): void {
    this.isSeriesExpanded = !this.isSeriesExpanded;
  }
}
