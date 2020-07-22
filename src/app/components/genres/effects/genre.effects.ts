import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromGenreActions from "../actions/genre.actions"
import { mergeMap, map, catchError } from 'rxjs/operators'
import { of } from 'rxjs';
import { GenreService } from '../services/genre.service';

@Injectable()
export class GenreEffects {

  loadGenres$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromGenreActions.loadGenres),
      mergeMap(() =>
        this.genreService.getGenres().pipe(
          map(genres => fromGenreActions.loadGenresSuccess({ genres })),
          catchError(error => of(fromGenreActions.loadGenresFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private genreService: GenreService) { }

}
