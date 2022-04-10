import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
