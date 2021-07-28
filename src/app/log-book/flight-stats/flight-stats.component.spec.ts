import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightStatsComponent } from './flight-stats.component';

describe('FlightStatsComponent', () => {
  let component: FlightStatsComponent;
  let fixture: ComponentFixture<FlightStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
