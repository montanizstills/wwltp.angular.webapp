import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store, select } from "@ngrx/store";
import { GenreState, selectGenres } from '.';
import * as fromGenreActions from './actions/genre.actions'
import { Genre } from './models/genre.model'

@Component({
  selector: "genres",
  templateUrl: "./genres.component.html",
  styleUrls: ["./genres.component.scss"]
})
export class GenresComponent implements OnInit {
  genres$: Observable<Genre[]>;
  genres: Genre[] = [];

  // subgenres = [1, 2, 3]

  // APICall, initialization
  // this.genres$=this.store.pipe(select("genre"))
  // .subscribe(map=>{console.log(map)});

  constructor(private store: Store<GenreState>) { }

  ngOnInit(): void {
    this.store.dispatch(fromGenreActions.loadGenresSuccess({ genres: this.genres }))
  }

  loadGenres() {
    this.genres$ = this.store.pipe(select(selectGenres))
   }
}
