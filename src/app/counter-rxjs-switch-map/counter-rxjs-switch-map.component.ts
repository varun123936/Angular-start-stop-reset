import { Component } from '@angular/core';
import { BehaviorSubject, EMPTY, interval, switchMap } from 'rxjs';

@Component({
  selector: 'app-counter-rxjs-switch-map',
  standalone: true,
  imports: [],
  templateUrl: './counter-rxjs-switch-map.component.html',
  styleUrl: './counter-rxjs-switch-map.component.css'
})
export class CounterRxjsSwitchMapComponent {
count = 0;

  // true = running, false = stopped
  private running$ = new BehaviorSubject<boolean>(false);

// EMPTY is used when you want an observable stream to produce no values and end immediately.

  constructor() {
    this.running$
      .pipe(
        switchMap(isRunning =>
          isRunning ? interval(1000) : EMPTY
        )
      )
      .subscribe(() => {
        this.count++;
      });
  }

  start() {
    this.running$.next(true);
  }

  stop() {
    this.running$.next(false);
  }

  reset() {
    this.count = 0;
    this.running$.next(false);
  }
}
