import { Component } from '@angular/core';

import { CounterService } from '../counter.service';
import { Store } from '@ngrx/store';
import * as actions from '../store/counter.actions';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent {
  constructor(
    //private counterService: CounterService,
    private readonly store: Store,
  ) {}

  increment() {
    // this.counterService.increment();
    this.store.dispatch(actions.incrementActionCreator({ value: 2 }));
  }

  decrement() {
    // this.counterService.decrement();
    this.store.dispatch(actions.decrementActionCreator());
  }
}
