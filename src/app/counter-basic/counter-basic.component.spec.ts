import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterBasicComponent } from './counter-basic.component';

describe('CounterBasicComponent', () => {
  let component: CounterBasicComponent;
  let fixture: ComponentFixture<CounterBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
