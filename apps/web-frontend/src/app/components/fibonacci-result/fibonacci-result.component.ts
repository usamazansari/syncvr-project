import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { BehaviorSubject } from 'rxjs';

import { FibonacciResult, ResultTableView } from '@syncvr-project/domain';

import { CoreService } from '../../services';

@Component({
  selector: 'syncvr-project-fibonacci-result',
  templateUrl: './fibonacci-result.component.html',
  styleUrls: ['./fibonacci-result.component.scss']
})
export class FibonacciResultComponent implements OnInit {
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

  private _paginator!: MatPaginator;
  @ViewChild(MatPaginator, { static: false })
  private set paginator(paginator: MatPaginator) {
    this._paginator = paginator;
    this.dataSource.paginator = paginator;
  }

  displayedColumns: string[] = ['index', 'value'];

  dataSource = new MatTableDataSource<ResultTableView>([]);

  constructor(private readonly _service: CoreService) {}

  ngOnInit(): void {
    this.#input$.subscribe(input => {
      if (!!input) {
        this._service.processFibonacci(input).subscribe(result => {
          this.#result$.next(result);
          if (!!result.series.length) {
            result.series =
              typeof result.series === 'string'
                ? `${result.series}`.split(',').map(Number)
                : result.series;
            this.dataSource.data = result.series.map(
              (fibonacci: number, index: number) =>
                new ResultTableView({
                  index: index + 1,
                  value: fibonacci
                })
            );
            this.dataSource.paginator = this._paginator;
          }
        });
      }
    });
  }
}
