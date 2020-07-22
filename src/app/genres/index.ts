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
import { loadGenres, loadGenresSuccess, loadGenresFailure } from './genre.actions';
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
  on(loadGenresSuccess, (state, action) => {
    return { genres: action.genres }
  }),
  on(loadGenresFailure, (state, action) => {
    return { genres: state.genres, error: action.error }
  })
)

//slice from store = GenreState
export const selectGenreFeature = createFeatureSelector<GenreState>(genreStateFeatureKey)

//genres within slice
export const selectGenres = createSelector(selectGenreFeature,
  (state: GenreState) => state.genres)

export const metaReducers: MetaReducer<GenreState>[] = !environment.production ? [] : [];
