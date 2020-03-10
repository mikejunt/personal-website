import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as Reducers from './reducers';


export interface AppState {
  projects: Reducers.ProjectState
  users: Reducers.UserState
}

export const reducers: ActionReducerMap<AppState> = {
  projects: Reducers.projectReducer,
  users: Reducers.userReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
