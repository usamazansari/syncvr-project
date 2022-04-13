import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { FibonacciResult, ResultTableView } from '@syncvr-project/domain';

import { CoreService } from '../../services';
import { TableColumn } from '..';

@Component({
  selector: 'syncvr-project-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  #input$ = new BehaviorSubject<number>(0);

  @Input()
  set input(value: number) {
    this.#input$.next(value);
  }
  get input() {
    return this.#input$.getValue();
  }

  #result$ = new BehaviorSubject<FibonacciResult>(new FibonacciResult({}));

  set result(value: FibonacciResult) {
    this.#result$.next(value);
  }
  get result() {
    return this.#result$.getValue();
  }

  tableData: ResultTableView[] = [];
  tableColumns: TableColumn[] = [];

  constructor(private readonly _service: CoreService) {}

  ngOnInit(): void {
    this.tableColumns.push(
      new TableColumn({
        name: 'Index',
        identifier: 'index'
      }),
      new TableColumn({
        name: 'Value',
        identifier: 'value'
      })
    );

    this.#input$.subscribe(input => {
      if (!!input) {
        this._service.processFibonacci(input).subscribe(result => {
          this.#result$.next(result);
          if (!!result.series.length) {
            result.series =
              typeof result.series === 'string'
                ? `${result.series}`.split(',').map(Number)
                : result.series;
            this.tableData = result.series.map(
              (fibonacci: number, index: number) =>
                new ResultTableView({
                  index: index + 1,
                  value: fibonacci
                })
            );
          }
        });
      }
    });
  }
}
