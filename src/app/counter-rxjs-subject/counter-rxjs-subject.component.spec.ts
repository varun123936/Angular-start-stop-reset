import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterRxjsSubjectComponent } from './counter-rxjs-subject.component';

describe('CounterRxjsSubjectComponent', () => {
  let component: CounterRxjsSubjectComponent;
  let fixture: ComponentFixture<CounterRxjsSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterRxjsSubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterRxjsSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
