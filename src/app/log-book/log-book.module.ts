import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogBookComponent } from './log-book.component';
import { SharedModule } from '../shared/shared.module';
import { FlightStatsComponent } from './flight-stats/flight-stats.component';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from "@angular/material/table";



@NgModule({
  declarations: [LogBookComponent, FlightStatsComponent],
  imports: [CommonModule, SharedModule, MatButtonModule, MatTableModule],
})
export class LogBookModule {}
