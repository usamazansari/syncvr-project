import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

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
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
