declare var require: any
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store, select } from "@ngrx/store";
import { selectGenres } from './selectors/genre.selector';
import { GenreState } from './reducers/genre.reducer'
import * as fromGenreActions from './actions/genre.actions'
import { Genre } from './models/genre.model'
import { GenreService } from './services/genre.service';
import * as env from "ignore/env"
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { pipe } from 'rxjs';
import { TwitchService } from 'src/app/app_services/twitch.service';

@Component({
  selector: "genres",
  templateUrl: "./genres.component.html",
  styleUrls: ["./genres.component.scss"]
})

export class GenresComponent implements OnInit {

  genres=[]

  constructor(private store: Store<GenreState>, private genreService: GenreService, private http: HttpClient,private twitchService:TwitchService) {

  }

  ngOnInit(): void {
    console.log(this.twitchService.TWITCH_ACCESS_TOKEN)    

    this.twitchService.getTopGames().subscribe(
      res => {
        res['data'].map(eachGame => {
          this.store.dispatch(fromGenreActions.addGenre({genre:eachGame.name}))
        })
      }
    );

  }


  // loadGenres() {
  //   this.genres$ = this.store.pipe(select(selectGenres))
  // }
  // addGenre() {
  //   this.store.dispatch(fromGenreActions.addGenre({ genre: { id: "test" } }))
  // }


  // APICall, initialization
}
