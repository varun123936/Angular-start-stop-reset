import { Component } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-counter-rxjs-timer',
  standalone: true,
  imports: [],
  templateUrl: './counter-rxjs-timer.component.html',
  styleUrl: './counter-rxjs-timer.component.css'
})
export class CounterRxjsTimerComponent {
count = 0;
  subscription!: Subscription;

  start() {
    if (this.subscription && !this.subscription.closed) return;

    // timer(initialDelay, interval)
    this.subscription = timer(0, 1000).subscribe(() => {
      this.count++;
    });
  }

  stop() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  reset() {
    this.stop();
    this.count = 0;
  }

  ngOnDestroy() {
    this.stop();
  }
}
