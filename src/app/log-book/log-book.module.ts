import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogBookComponent } from './log-book.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LogBookComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LogBookModule { }
