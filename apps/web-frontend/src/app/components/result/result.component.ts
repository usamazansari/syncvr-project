import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Result, ResultTableView } from '@syncvr-project/domain';

import { TableColumn } from '..';

@Component({
  selector: 'syncvr-project-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  #result$ = new BehaviorSubject<Result>(new Result({}));

  @Input()
  set result(value: Result) {
    this.#result$.next(value);
  }
  get result() {
    return this.#result$.getValue();
  }

  tableData: ResultTableView[] = [];
  tableColumns: TableColumn[] = [];

  ngOnInit(): void {
    this.setupTableColumns();
    this.watchResult();
  }

  private watchResult() {
    this.#result$.subscribe(result => {
      this.#result$.next(result);
      if (!!result.series.length) {
        this.setTableData({
          series: `${result.series}`.split(',').map(Number)
        });
      }
    });
  }

  private setTableData({ series = [] }: Result) {
    this.tableData = series.map(
      (fibonacci: number, index: number) =>
        new ResultTableView({
          index: index + 1,
          value: fibonacci
        })
    );
  }

  private setupTableColumns() {
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
  }
}
