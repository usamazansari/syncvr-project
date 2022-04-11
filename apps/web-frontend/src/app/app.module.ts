import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MaterialModule } from './modules';
import {
  FibonacciFormComponent,
  FibonacciResultComponent,
  HistoryComponent,
  ShellComponent
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    FibonacciFormComponent,
    FibonacciResultComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
