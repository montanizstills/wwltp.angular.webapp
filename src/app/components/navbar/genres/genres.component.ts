import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store, select } from "@ngrx/store";
import { selectGenres } from './selectors/genre.selector';
import { GenreState } from './reducers/genre.reducer'
import * as fromGenreActions from './actions/genre.actions'
import { Genre } from './models/genre.model'
import { GenreService } from './services/genre.service';

@Component({
  selector: "genres",
  templateUrl: "./genres.component.html",
  styleUrls: ["./genres.component.scss"]
})
export class GenresComponent implements OnInit {

  genres$: Observable<Genre[]>;

  constructor(private store: Store<GenreState>, private genreService: GenreService) {
    this.addGenre();
    this.loadGenres();
    console.log(this.genres$)
  }

  ngOnInit(): void {

  }

  loadGenres() {
    this.genres$ = this.store.pipe(select(selectGenres))
  }

  addGenre() {
    this.store.dispatch(fromGenreActions.addGenre({ genre: { id: "test" } }))
  }

  // APICall, initialization
}
