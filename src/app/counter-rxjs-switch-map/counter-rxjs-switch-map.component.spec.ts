import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { CounterRxjsSwitchMapComponent } from './counter-rxjs-switch-map.component';

describe('CounterRxjsSwitchMapComponent', () => {
  let component: CounterRxjsSwitchMapComponent;
  let fixture: ComponentFixture<CounterRxjsSwitchMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterRxjsSwitchMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterRxjsSwitchMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('does not increment when stopped', fakeAsync(() => {
    tick(3000);
    expect(component.count).toBe(0);
  }));

  it('increments every second while running', fakeAsync(() => {
    component.start();

    tick(1000);
    expect(component.count).toBe(1);

    tick(2000);
    expect(component.count).toBe(3);

    component.stop();
    tick(2000);
    expect(component.count).toBe(3);
  }));

  it('reset clears count and stops the timer', fakeAsync(() => {
    component.start();
    tick(2000);
    expect(component.count).toBe(2);

    component.reset();
    expect(component.count).toBe(0);

    tick(3000);
    expect(component.count).toBe(0);

    component.start();
    tick(1000);
    expect(component.count).toBe(1);

    component.stop();
  }));
});
