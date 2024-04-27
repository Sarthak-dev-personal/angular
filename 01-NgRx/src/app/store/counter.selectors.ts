import {
    createFeatureSelector,
    createSelector,
} from "@ngrx/store";

export const counterSelector = createFeatureSelector<number>('counter');

export const incrementSelector = createSelector(
    /* state: ICounterState) => state.counter,
    counter => counter, */

    counterSelector,
    counter => counter,
);
