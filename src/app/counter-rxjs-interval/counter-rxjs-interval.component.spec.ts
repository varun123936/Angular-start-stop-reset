import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterRxjsIntervalComponent } from './counter-rxjs-interval.component';

describe('CounterRxjsIntervalComponent', () => {
  let component: CounterRxjsIntervalComponent;
  let fixture: ComponentFixture<CounterRxjsIntervalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterRxjsIntervalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterRxjsIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
