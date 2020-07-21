import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Genre } from './genre.model';

export const genreStateFeatureKey = 'genreState';

export interface GenreState {
  genres: Genre[],
  error: any
}

export const defaultState: GenreState = {
  genres: undefined,
  error: undefined
}

export const metaReducers: MetaReducer<GenreState>[] = !environment.production ? [] : [];
