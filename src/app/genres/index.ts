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
import { loadGenres } from './genre.actions';
import { Action } from 'rxjs/internal/scheduler/Action';

export const genreStateFeatureKey = 'genreState';

export interface GenreState {
  genres: Genre[],
  error: any
}

export const initialState: GenreState = {
  genres: undefined,
  error: undefined
}

export const reducers = createReducer(
  initialState,
  on(loadGenres, (state, action) => {
    return { genres: action.genres }
  })
)

export const metaReducers: MetaReducer<GenreState>[] = !environment.production ? [] : [];
