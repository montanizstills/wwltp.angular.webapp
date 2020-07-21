import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export const genreStateFeatureKey = 'genreState';

export interface GenreState {

}

export const reducers: ActionReducerMap<GenreState> = {

};


export const metaReducers: MetaReducer<GenreState>[] = !environment.production ? [] : [];
