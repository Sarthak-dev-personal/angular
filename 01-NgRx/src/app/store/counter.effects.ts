import {
    Actions,
    createEffect,
    ofType,
} from "@ngrx/effects";

import { Injectable } from "@angular/core";

import * as actions from '../store/counter.actions';

import {
    of,
    switchMap,
    tap,
    withLatestFrom,
} from "rxjs";
import { Store } from "@ngrx/store";
import { ICounterState } from "./counter.reducer";
import { counterSelector } from "./counter.selectors";



@Injectable()

export class CounterEffects {
    constructor(
        private readonly actions$: Actions,
        private readonly store: Store<ICounterState>,
    ) {}

    public saveCount$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(
                /**
                 * Since, we want to save to localstorage in both cases.
                 */
                actions.incrementActionCreator,
                actions.decrementActionCreator,
            ),
            /**
             * Get the latest value from the store.
             * Since the store in itself is an observable, we are dependent here
             * on the latest value being emitted from another observable thus,
             * the mneed to use the withLatestFrom operator.
             */
            withLatestFrom(this.store.select(counterSelector)),
            tap(
                ([action, data]) => {
                    if (action.type === actions.INCREMENT_ACTION) {
                        console.log(action.value);

                        /**
                         * Set the value by which we are incrementing.
                         * Received as part of the payload sent with the action.
                         */
                        localStorage.setItem('counter', action.value.toString());

                        // Set the updated counter value.
                        localStorage.setItem('actualCounter', data.toString());
                    }else {
                        // Since we don't send a payload in decrement action & always decrement by 1.
                        localStorage.setItem('counter', '1');

                        // Set the updated counter value.
                        localStorage.setItem('actualCounter', data.toString());
                    }
                }
            ),
        );
    }, {
        // Since, we don't dispatch a new action from this effect.
        dispatch: false,
    });

    /**
     * Fetch the stored counter value from local storage.
     * Dispatch action to set the fetched value in store.
     */
    public getCounterFromLocalStorage$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(actions.getCounterFromLocalStorageActionCreator),
                switchMap(() => {
                    const storedCounterValue = localStorage.getItem('actualCounter');

                    if (storedCounterValue) {
                        return of(actions.setCounterInStoreActionCreator({ value: +storedCounterValue }));
                    } else {
                        return of(actions.setCounterInStoreActionCreator({ value: 1 }));
                    }
                }),
            );
        }
    );
}
