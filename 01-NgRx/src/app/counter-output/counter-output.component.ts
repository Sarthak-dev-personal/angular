import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { CounterService } from '../counter.service';
import { ICounterState } from '../store/counter.reducer';
import { incrementSelector } from '../store/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit {
  counter = 0;
  counterServiceSub?: Subscription;

  /**
   * We can use ! to remove the highlighted linting warning here.
   * This doesn't throw an error in build bcoz I've updated the tsconfig.json file
   * to disable the strictPropertyInitialization.
   * The highlighted red mark can also be removed by renaming the variable as count$! instead.
   * This is used to tell the angular compiler that this property will definitely be initialized
   * somewhere in the file.
   */
  public count$: Observable<number>;

  constructor(
    // private counterService: CounterService
    private readonly store: Store<ICounterState>,
  ) {}

  ngOnInit(): void {
   /*  this.counterServiceSub = this.counterService.counterChanged.subscribe(
      (newVal) => (this.counter = newVal)
    ); */

    this.count$ = this.store.select(incrementSelector);
  }

  /* ngOnDestroy(): void {
    if (this.counterServiceSub) {
      this.counterServiceSub.unsubscribe();
    }
  } */
}
