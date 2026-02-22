import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-rxjs-interval',
  standalone: true,
  imports: [],
  templateUrl: './counter-rxjs-interval.component.html',
  styleUrl: './counter-rxjs-interval.component.css'
})
export class CounterRxjsIntervalComponent {
  count = 0;
  subscription!: Subscription;

  start() {
    if (this.subscription && !this.subscription.closed) return;

    this.subscription = interval(1000).subscribe(() => {
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
    this.stop(); // cleanup
  }
}
