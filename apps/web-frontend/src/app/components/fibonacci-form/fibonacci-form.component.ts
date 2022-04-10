import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'syncvr-project-fibonacci-form',
  templateUrl: './fibonacci-form.component.html',
  styleUrls: ['./fibonacci-form.component.scss']
})
export class FibonacciFormComponent {
  constructor(private readonly _fb: FormBuilder) {}

  public form = this._fb.group({
    n: [1]
  });

  public onSubmit() {
    console.log(this.form.value);
  }
}
