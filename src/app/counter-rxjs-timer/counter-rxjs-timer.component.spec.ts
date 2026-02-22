import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterRxjsTimerComponent } from './counter-rxjs-timer.component';

describe('CounterRxjsTimerComponent', () => {
  let component: CounterRxjsTimerComponent;
  let fixture: ComponentFixture<CounterRxjsTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterRxjsTimerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterRxjsTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
