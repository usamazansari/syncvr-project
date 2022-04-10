import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'syncvr-project-fibonacci-form',
  templateUrl: './fibonacci-form.component.html',
  styleUrls: ['./fibonacci-form.component.scss']
})
export class FibonacciFormComponent {
  public form = this._fb.group({
    n: [1]
  });

  @Output() public triggerResult$ = new EventEmitter<number>();

  constructor(private readonly _fb: FormBuilder) {}

  public onSubmit() {
    this.triggerResult$.emit(this.form.value.n);
  }
}
