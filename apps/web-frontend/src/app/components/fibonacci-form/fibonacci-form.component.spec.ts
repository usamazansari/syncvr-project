import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibonacciFormComponent } from './fibonacci-form.component';

describe('FibonacciFormComponent', () => {
  let component: FibonacciFormComponent;
  let fixture: ComponentFixture<FibonacciFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FibonacciFormComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FibonacciFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
