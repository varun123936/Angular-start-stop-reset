import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterBasicComponent } from './counter-basic/counter-basic.component';
import { CounterRxjsIntervalComponent } from './counter-rxjs-interval/counter-rxjs-interval.component';
import { CounterRxjsTimerComponent } from './counter-rxjs-timer/counter-rxjs-timer.component';
import { CounterRxjsSubjectComponent } from './counter-rxjs-subject/counter-rxjs-subject.component';
import { CounterRxjsSwitchMapComponent } from './counter-rxjs-switch-map/counter-rxjs-switch-map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterBasicComponent,CounterRxjsIntervalComponent,CounterRxjsTimerComponent,CounterRxjsSubjectComponent,CounterRxjsSwitchMapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'startStopReset';
}
