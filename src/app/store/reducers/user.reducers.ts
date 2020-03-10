import { createReducer } from "@ngrx/store";
import { setViewedProject, setAdminUser } from '../actions';
import { on } from '@ngrx/store'

export interface UserState {
        current: string,
        history: string[],
        isAdmin: boolean,
}


export const initialUserState: UserState = {
        current: "",
        history: [""],
        isAdmin: false
}



const userreducer = createReducer(initialUserState,
    on(setViewedProject, (state, { project }) => ({...state, current: project})),
    on(setViewedProject, (state, { project }) => ({...state, history: [...state.history, project]})),
    on(setAdminUser, (state) => ({...state, isAdmin: true}))
);


export function userReducer(state, action) {
    return userreducer(state, action)
}