import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibonacciResultComponent } from './fibonacci-result.component';

describe('FibonacciResultsComponent', () => {
  let component: FibonacciResultComponent;
  let fixture: ComponentFixture<FibonacciResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FibonacciResultComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FibonacciResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
