import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Result, ResultTableView } from '@syncvr-project/domain';

import { Addresser, TableColumn } from '..';

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

  #addresser$ = new BehaviorSubject<Addresser | null>(null);

  @Input()
  set addresser(value: Addresser | null) {
    this.#addresser$.next(value);
  }
  get addresser() {
    return this.#addresser$.getValue();
  }

  #timestamp$ = new BehaviorSubject<Date>(new Date());
  @Input()
  set timestamp(value: Date) {
    this.#timestamp$.next(value);
  }
  get timestamp() {
    return this.#timestamp$.getValue();
  }

  ADDRESSER_STUB = Addresser;

  tableData: ResultTableView[] = [];
  tableColumns: TableColumn[] = [];

  ngOnInit(): void {
    this.setupTableColumns();
    this.watchResult();
  }

  private watchResult() {
    this.#result$.subscribe(result => {
      result.series = `${result.series}`.split(',').map(Number);
      if (!!result.series.length) {
        this.setTableData({
          series: result.series
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
