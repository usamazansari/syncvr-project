import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'syncvr-project-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  public form = this._fb.group({
    n: [2]
  });

  @Output() public triggerResult$ = new EventEmitter<number>();

  constructor(private readonly _fb: FormBuilder) {}

  public onSubmit() {
    this.triggerResult$.emit(this.form.value.n);
  }
}
