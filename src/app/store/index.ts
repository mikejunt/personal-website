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
}

export const reducers: ActionReducerMap<AppState> = {
  projects: Reducers.projectReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
