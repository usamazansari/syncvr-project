import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'syncvr-project-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
  public input$ = new BehaviorSubject<number | null>(null);

  public updateResult($: number) {
    this.input$.next($);
  }
}
