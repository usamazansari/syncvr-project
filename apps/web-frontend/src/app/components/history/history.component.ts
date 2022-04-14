import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import {
  History,
  HistoryTableView,
  ResultTableView
} from '@syncvr-project/domain';

import { TableColumn } from '..';
import { CoreService } from '../../services';

@Component({
  selector: 'syncvr-project-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  #history$ = new BehaviorSubject<History[]>([]);

  @Input() set history(value: History[]) {
    this.#history$.next(value);
  }
  get history(): History[] {
    return this.#history$.getValue();
  }

  tableData: HistoryTableView[] = [];
  tableColumns: TableColumn[] = [];

  @Output() fetchHistory$ = new EventEmitter<void>();
  @Output() fetchResult$ = new EventEmitter<number>();

  constructor(private readonly _service: CoreService) {}

  ngOnInit(): void {
    this.refetchHistory();
    this.setupTableColumns();
    this.watchHistory();
  }

  fetchResult($: ResultTableView): void {
    this.fetchResult$.emit($.value);
  }

  refetchHistory(): void {
    this._service.fetchHistory().subscribe(() => {
      this.fetchHistory$.emit();
    });
  }

  private watchHistory() {
    this.#history$.subscribe(history => {
      if (!!history.length) {
        this.setTableData(history);
      }
    });
  }

  private setTableData(history: History[]) {
    this.tableData = history.map(
      (history: History, index: number) =>
        new HistoryTableView({
          ...history,
          index: index + 1,
          value: history.payload
        })
    );
  }

  private setupTableColumns() {
    this.tableColumns.push(
      new TableColumn({
        name: 'Timestamp',
        identifier: 'timestamp'
      }),
      new TableColumn({
        name: 'Payload',
        identifier: 'value'
      })
    );
  }
}
