import {
  Component,
  OnInit,
} from '@angular/core';

import { Store } from '@ngrx/store';
import * as actions from '../app/store/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private readonly store: Store) {}

  /** @override */
  public ngOnInit(): void {
    this.store.dispatch(actions.getCounterFromLocalStorageActionCreator());
  }
}
