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

@Component({
  selector: "genres",
  templateUrl: "./genres.component.html",
  styleUrls: ["./genres.component.scss"]
})

export class GenresComponent implements OnInit {

  genres$: Observable<Genre[]>;

  //headers
  readonly headers = {
    'Authorization': "Bearer <token>",
    'Content-Type': "application/json",
    'Access-Control-Allow-Origin': "*"
  }
  requestOptions = {
    headers: new HttpHeaders(this.headers)
  }

  //redirect -- for client 
  redirect = "http://localhost:4200"

  // auth paths
  s2sPath = "https://id.twitch.tv/oauth2/token?client_id=" + env.TWITCH_CLIENT_ID + "&client_secret=" + env.TWITCH_CLIENT_SECRET + "&grant_type=client_credentials" //sever-to-server, returns token
  clientPath = "https://id.twitch.tv/oauth2/authorize?client_id=" + env.TWITCH_CLIENT_ID + "&redirect_uri=" + this.redirect + "&response_type=token&scope=[]"

  constructor(private store: Store<GenreState>, private genreService: GenreService, private http: HttpClient) {
  }

  ngOnInit(): void {

    this.http.post(this.s2sPath, null, {
      headers:
      {
        'Content-Type': "application/json",
      }
    })
      .subscribe(res => {
        console.log(res['access_token']);
        this.http.get("https://api.twitch.tv/helix/games/top", {
          headers:
          {
            'Content-Type': "application/json",
            'Authorization': "Bearer " + res['access_token'],
            'Client-ID': env.TWITCH_CLIENT_ID
          }
        })
          .subscribe(res => {
            console.log(res)
          })
      })

  }

  // loadGenres() {
  //   this.genres$ = this.store.pipe(select(selectGenres))
  // }
  // addGenre() {
  //   this.store.dispatch(fromGenreActions.addGenre({ genre: { id: "test" } }))
  // }


  // APICall, initialization
}
