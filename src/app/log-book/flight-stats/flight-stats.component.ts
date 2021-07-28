import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-stats',
  templateUrl: './flight-stats.component.html',
  styleUrls: ['./flight-stats.component.scss']
})
export class FlightStatsComponent implements OnInit {

  @Input() timeOfDay: string = 'day';

  constructor() { }

  ngOnInit(): void {
  }

}
