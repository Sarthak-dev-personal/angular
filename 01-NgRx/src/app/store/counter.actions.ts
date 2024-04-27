import { createAction, props } from "@ngrx/store"

export const INCREMENT_ACTION = '[COUNTER] INCREMENT';
export const DECREMENT_ACTION = '[COUNTER] DECREMENT';
export const GET_COUNTER_FROM_LOCAL_STORAGE = '[COUNTER] GET_COUNTER_FROM_LOCAL_STORAGE';
export const SET_COUNTER_IN_STORE = '[COUNTER] SET_COUNTER_IN_STORE';

/**
 * Actions to fetch the counter value from local storage on initial load
 * and set the counter value in the store once the value is retrieved.
 * Used to show the eg. of an effect dispatching an action observable.
 */
export const getCounterFromLocalStorageActionCreator = createAction(
    GET_COUNTER_FROM_LOCAL_STORAGE,
);

export const setCounterInStoreActionCreator = createAction(
    SET_COUNTER_IN_STORE,
    props<{value: number}>(),
);

export const incrementActionCreator = createAction(
    INCREMENT_ACTION,
    props<{value: number}>(),
);

export const decrementActionCreator = createAction(
    DECREMENT_ACTION,
);
