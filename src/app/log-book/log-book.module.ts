import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogBookComponent } from './log-book.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [LogBookComponent],
  imports: [CommonModule, SharedModule, FontAwesomeModule],
})
export class LogBookModule {
}
