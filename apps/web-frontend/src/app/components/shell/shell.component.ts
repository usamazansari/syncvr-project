import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { History, Result } from '@syncvr-project/domain';

import { CoreService } from '../../services';

@Component({
  selector: 'syncvr-project-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
  public input$ = new BehaviorSubject<number>(0);
  public result$ = new BehaviorSubject<Result>(new Result({}));

  public history$ = new BehaviorSubject<History[]>([]);

  constructor(private _service: CoreService) {}

  public fetchFibonacci($: number): void {
    this._service.fetchFibonacci($).subscribe(result => {
      this.result$.next(result);
    });
  }

  public fetchHistory(): void {
    this._service.fetchHistory().subscribe(history => {
      this.history$.next(history);
    });
  }
  public fetchResult($: number): void {
    this._service.fetchResult($).subscribe(result => {
      this.result$.next(result);
    });
  }
}
