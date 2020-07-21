import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Genre } from './genre.model';

export const loadGenres = createAction(
  '[Genre/API] Load Genres', 
  props<{ genres: Genre[] }>()
);

export const addGenre = createAction(
  '[Genre/API] Add Genre',
  props<{ genre: Genre }>()
);

export const upsertGenre = createAction(
  '[Genre/API] Upsert Genre',
  props<{ genre: Genre }>()
);

export const addGenres = createAction(
  '[Genre/API] Add Genres',
  props<{ genres: Genre[] }>()
);

export const upsertGenres = createAction(
  '[Genre/API] Upsert Genres',
  props<{ genres: Genre[] }>()
);

export const updateGenre = createAction(
  '[Genre/API] Update Genre',
  props<{ genre: Update<Genre> }>()
);

export const updateGenres = createAction(
  '[Genre/API] Update Genres',
  props<{ genres: Update<Genre>[] }>()
);

export const deleteGenre = createAction(
  '[Genre/API] Delete Genre',
  props<{ id: string }>()
);

export const deleteGenres = createAction(
  '[Genre/API] Delete Genres',
  props<{ ids: string[] }>()
);

export const clearGenres = createAction(
  '[Genre/API] Clear Genres'
);
