import { Action, createReducer, on, MetaReducer } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Genre } from '../models/genre.model';
import * as GenreActions from '../actions/genre.actions';
import { environment } from '../../../../../environments/environment';

export const genreStateFeatureKey = 'genreState';

export const adapter: EntityAdapter<Genre> = createEntityAdapter<Genre>();

export interface GenreState extends EntityState<Genre> {
  error: any;
}

export const initialState: GenreState = adapter.getInitialState({ error: undefined });

export const genreReducer = createReducer(
  initialState,
  on(GenreActions.addGenreSuccess, (state, action) => {
      return adapter.addOne(action.genre, state)
    }),
  on(GenreActions.addGenreFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      }
    }),
  // on(GenreActions.upsertGenre,
  //   (state, action) => adapter.upsertOne(action.genre, state)
  // ),
  // on(GenreActions.addGenres,
  //   (state, action) => adapter.addMany(action.genres, state)
  // ),
  // on(GenreActions.upsertGenres,
  //   (state, action) => adapter.upsertMany(action.genres, state)
  // ),
  // on(GenreActions.updateGenre,
  //   (state, action) => adapter.updateOne(action.genre, state)
  // ),
  // on(GenreActions.updateGenres,
  //   (state, action) => adapter.updateMany(action.genres, state)
  // ),
  // on(GenreActions.deleteGenre,
  //   (state, action) => adapter.removeOne(action.id, state)
  // ),
  // on(GenreActions.deleteGenres,
  //   (state, action) => adapter.removeMany(action.ids, state)
  // ),
  // on(GenreActions.loadGenres,
  //   (state, action) => adapter.setAll(action.genres, state)
  // ),
  // on(GenreActions.clearGenres,
  //   state => adapter.removeAll(state)
  // )
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


export const metaReducers: MetaReducer<GenreState>[] = !environment.production ? [] : [];
 
