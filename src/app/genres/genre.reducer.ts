import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Genre } from './genre.model';
import * as GenreActions from './genre.actions';

export const genresFeatureKey = 'genres';

export interface GenreState extends EntityState<Genre> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Genre> = createEntityAdapter<Genre>();

export const initialState: GenreState = adapter.getInitialState({
  // additional entity state properties
});

export const genreReducer = createReducer(
  initialState,
  on(GenreActions.addGenre,
    (state, action) => adapter.addOne(action.genre, state)
  ),
  on(GenreActions.upsertGenre,
    (state, action) => adapter.upsertOne(action.genre, state)
  ),
  on(GenreActions.addGenres,
    (state, action) => adapter.addMany(action.genres, state)
  ),
  on(GenreActions.upsertGenres,
    (state, action) => adapter.upsertMany(action.genres, state)
  ),
  on(GenreActions.updateGenre,
    (state, action) => adapter.updateOne(action.genre, state)
  ),
  on(GenreActions.updateGenres,
    (state, action) => adapter.updateMany(action.genres, state)
  ),
  on(GenreActions.deleteGenre,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(GenreActions.deleteGenres,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(GenreActions.loadGenres,
    (state, action) => adapter.setAll(action.genres, state)
  ),
  on(GenreActions.clearGenres,
    state => adapter.removeAll(state)
  ),
);

export function reducer(state: GenreState, action: Action) {
  return genreReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
