import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MaterialModule } from './modules';
import {
  DialogComponent,
  FormComponent,
  ResultComponent,
  HistoryComponent,
  TableComponent,
  ShellComponent
} from './components';

@NgModule({
  declarations: [
    DialogComponent,
    AppComponent,
    ShellComponent,
    FormComponent,
    ResultComponent,
    HistoryComponent,
    TableComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
