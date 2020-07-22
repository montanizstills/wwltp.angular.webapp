import { createFeatureSelector, createSelector, MetaReducer, createReducer, on } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { Genre } from './models/genre.model';
import { loadGenresSuccess, loadGenresFailure } from './actions/genre.actions';
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity'

export const genreStateFeatureKey = 'genreState';

export interface GenreState extends EntityState<Genre> {
  error: any
}

export const adapter: EntityAdapter<Genre> = createEntityAdapter<Genre>()


export const initialState = adapter.getInitialState({ error: undefined });

export const reducers = createReducer(
  initialState,
  on(loadGenresSuccess, (state, action) => {
    return adapter.addAll(action.genres, state)
  }),
  on(loadGenresFailure, (state, action) => {
    return { error: action.error }
  })
)

//slice from store = GenreState
export const selectGenreFeature = createFeatureSelector<GenreState>(genreStateFeatureKey)

//Selector: genres within slice
export const selectGenres = createSelector(selectGenreFeature,
  adapter.getSelectors().selectAll)

  //Selector : errors within slice
export const selectError = createSelector(selectGenreFeature,
  (state: GenreState) => state.error)

export const metaReducers: MetaReducer<GenreState>[] = !environment.production ? [] : [];
 