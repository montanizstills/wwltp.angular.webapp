import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Genre } from './genre.model';

//Add Genre
export const addGenre = createAction(
  '[Genre] Add Genre',
  props<{ genre: Genre }>()
);

export const addGenreSuccess = createAction(
  '[Genre Add Effect] Add Genre Success',
  props<{ genre: Genre }>()
);

export const addGenreFailure = createAction(
  '[Genre Add Effect] Add Genre Failure',
  props<{ error: any }>()
);

export const addGenres = createAction(
  '[Genre] Add Genres',
  props<{ genres: Genre[] }>()
);

//Load Genre
export const loadGenres = createAction(
  '[Genre] Load Genres',
  props<{genres: Genre[]}>()
);

export const loadGenresSuccess = createAction(
  '[Genre] Load Genres Success',
  props<{ genres: Genre[] }>()
);

export const loadGenresFailure = createAction(
  '[Genre] Load Genres Failure',
  props<{ error: any }>()
);

// Upsert Genre - update if not create
export const upsertGenre = createAction(
  '[Genre] Upsert Genre',
  props<{ genre: Genre }>()
);

export const upsertGenres = createAction(
  '[Genre] Upsert Genres',
  props<{ genres: Genre[] }>()
);

// Update Genre
export const updateGenre = createAction(
  '[Genre] Update Genre',
  props<{ genre: Update<Genre> }>()
);

export const updateGenres = createAction(
  '[Genre] Update Genres',
  props<{ genres: Update<Genre>[] }>()
);

//Delete Genre
export const deleteGenre = createAction(
  '[Genre] Delete Genre',
  props<{ id: string }>()
);

export const deleteGenres = createAction(
  '[Genre] Delete Genres',
  props<{ ids: string[] }>()
);

//Clear Genre
export const clearGenres = createAction(
  '[Genre] Clear Genres'
);
