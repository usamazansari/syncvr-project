import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { ResultTableView } from '@syncvr-project/domain';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'syncvr-project-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  dataSource = new MatTableDataSource<ResultTableView>([]);

  #data$ = new BehaviorSubject<ResultTableView[]>([]);
  displayedColumns: string[] = [];

  @Input()
  set data(value: ResultTableView[]) {
    this.#data$.next(value);
  }
  get data() {
    return this.#data$.getValue();
  }

  #columns$ = new BehaviorSubject<TableColumn[]>([]);

  @Input()
  set columns(value: TableColumn[]) {
    this.#columns$.next(value);
  }
  get columns() {
    return this.#columns$.getValue();
  }

  private _paginator!: MatPaginator;
  @ViewChild(MatPaginator, { static: false })
  private set paginator(paginator: MatPaginator) {
    this._paginator = paginator;
    this.dataSource.paginator = paginator;
  }

  ngOnInit(): void {
    this.#data$.subscribe(data => {
      this.dataSource.data = data;
    });
    this.#columns$.subscribe(columns => {
      this.displayedColumns = columns.map(column => column.identifier);
    });
  }
}

export class TableColumn {
  name: string;
  identifier: string;

  constructor({ name = '', identifier = '' }: Partial<TableColumn>) {
    this.name = name;
    this.identifier = identifier;
  }
}
