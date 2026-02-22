import { Component } from '@angular/core';
import { interval, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-rxjs-subject',
  standalone: true,
  imports: [],
  templateUrl: './counter-rxjs-subject.component.html',
  styleUrl: './counter-rxjs-subject.component.css'
})
export class CounterRxjsSubjectComponent {
count = 0;

  private start$ = new Subject<void>();
  private stop$ = new Subject<void>();
  private subscription!: Subscription;

  constructor() {
    // React to START
    this.start$.subscribe(() => {
      if (this.subscription && !this.subscription.closed) return;

      this.subscription = interval(1000).subscribe(() => {
        this.count++;
      });
    });

    // React to STOP
    this.stop$.subscribe(() => {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    });
  }

  start() {
    this.start$.next();
  }

  stop() {
    this.stop$.next();
  }

  reset() {
    this.stop();
    this.count = 0;
  }

  ngOnDestroy() {
    this.stop();
  }
}
