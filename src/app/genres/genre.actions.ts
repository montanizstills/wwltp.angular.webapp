import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Genre } from './genre.model';

export const loadGenres = createAction(
  '[Genre] Load Genres', 
  props<{ genres: Genre[] }>()
);

export const addGenre = createAction(
  '[Genre] Add Genre',
  props<{ genre: Genre }>()
);

export const upsertGenre = createAction(
  '[Genre] Upsert Genre',
  props<{ genre: Genre }>()
);

export const addGenres = createAction(
  '[Genre] Add Genres',
  props<{ genres: Genre[] }>()
);

export const upsertGenres = createAction(
  '[Genre] Upsert Genres',
  props<{ genres: Genre[] }>()
);

export const updateGenre = createAction(
  '[Genre] Update Genre',
  props<{ genre: Update<Genre> }>()
);

export const updateGenres = createAction(
  '[Genre] Update Genres',
  props<{ genres: Update<Genre>[] }>()
);

export const deleteGenre = createAction(
  '[Genre] Delete Genre',
  props<{ id: string }>()
);

export const deleteGenres = createAction(
  '[Genre] Delete Genres',
  props<{ ids: string[] }>()
);

export const clearGenres = createAction(
  '[Genre] Clear Genres'
);
