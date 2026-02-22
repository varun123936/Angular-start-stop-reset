import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-basic',
  standalone: true,
  imports: [],
  templateUrl: './counter-basic.component.html',
  styleUrl: './counter-basic.component.css'
})
export class CounterBasicComponent {
  count = 0;
  intervalId: any = null;

  start() {
    if (this.intervalId) return; // prevent multiple intervals

    this.intervalId = setInterval(() => {
      this.count++;
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  reset() {
    this.stop();
    this.count = 0;
  }
}
