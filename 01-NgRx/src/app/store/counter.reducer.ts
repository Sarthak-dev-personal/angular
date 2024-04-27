import {
    createReducer,
    on,
} from "@ngrx/store";

import * as actions from "./counter.actions";

export interface ICounterState  {
    counter: number;
}

/* const initialState = {
    counter: 0,
} */

const initialState = 0;

export const counterReducer = createReducer(
    initialState,
    on(
        actions.incrementActionCreator,
        (state, actions) => {
            return state + actions.value;
        }
    ),

    on(
        actions.decrementActionCreator,
        state => state - 1,
    ),

    on(
        actions.setCounterInStoreActionCreator,
        (state, action) => action.value,
    ),
);

/**
 * The old approach.
 * The createReducer method does all this under the hood for us now.
 * In case of complicated logic, this used to be quite complex.
 */
/* export function counterReducer(state=initialState, action: any) {
    if (action.type === actions.INCREMENT_ACTION) {
        return {
            state + action.value,
        };
    }
    return state;
} */

