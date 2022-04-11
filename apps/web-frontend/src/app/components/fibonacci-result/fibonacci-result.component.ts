import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { BehaviorSubject } from 'rxjs';

import { IFibonacciResult, ResultTableView } from '@syncvr-project/interfaces';

import { CoreService } from '../../services';

@Component({
  selector: 'syncvr-project-fibonacci-result',
  templateUrl: './fibonacci-result.component.html',
  styleUrls: ['./fibonacci-result.component.scss']
})
export class FibonacciResultComponent implements OnInit {
  #input$ = new BehaviorSubject<number | null>(null);

  @Input()
  set input(value: number | null) {
    this.#input$.next(value);
  }
  get input() {
    return this.#input$.getValue();
  }

  #result$ = new BehaviorSubject<IFibonacciResult>({
    series: [] as number[]
  });

  set result(value: IFibonacciResult) {
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
        this._service.getFibonacci(input).subscribe(result => {
          this.#result$.next(result);
          if (!!result.series.length) {
            this.dataSource.data = result.series.map(
              (fibonacci: number, index: number) => ({
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
