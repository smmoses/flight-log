import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogBookComponent } from './log-book.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlightStatsComponent } from './flight-stats/flight-stats.component';



@NgModule({
  declarations: [LogBookComponent, FlightStatsComponent],
  imports: [CommonModule, SharedModule],
})
export class LogBookModule {
}
