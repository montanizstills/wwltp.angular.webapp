import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store, select } from "@ngrx/store";
import { selectGenres } from './selectors/genre.selector';
import { GenreState } from './reducers/genre.reducer'
import * as fromGenreActions from './actions/genre.actions'
import { Genre } from './models/genre.model'
import { GenreService } from './services/genre.service';
import * as env from "ignore/env"
import { HttpClient } from '@angular/common/http';
import { TwitchService } from 'src/app/app_services/twitch.service';
import { AuthService } from 'src/app/auth/auth.service'
import { FacebookService } from 'src/app/app_services/facebook.service';
import {YoutubeService} from 'src/app/app_services/youtube.service'

@Component({
  selector: "genres",
  templateUrl: "./genres.component.html",
  styleUrls: ["./genres.component.scss"]
})

export class GenresComponent implements OnInit {

  // this.genres$ = this.store.pipe(select(selectGenres))
  genres = []

  constructor(private store: Store<GenreState>, private http: HttpClient, private twitchService: TwitchService, private auth: AuthService, private facebookService: FacebookService, private youtubeService: YoutubeService) {

  }

  login() {
    return this.auth.login()
  }

  isLoggedIn() {
    return this.auth.loggedIn
  }

  logout() {
    return this.auth.logout();
  }

  getUserProfile() {
    return this.auth.userProfile$
  }

  async hitFacebookAPI() {
    // let token = await this.auth.getRawToken()
    let token = await this.facebookService.getFromURL()
    // this.http.get("https://graph.facebook.com/588510401771671/?access_token="+token).subscribe(res=>console.log(res))
  }

  async hitYoutubeAPI(){
    await this.youtubeService.getYoutubeCategoryIds();
  }


  ngOnInit(): void {

    // this.twitchService.getTopGames().subscribe(
    //   res => {
    //     res['data'].map(eachGame => {
    //       this.store.dispatch(fromGenreActions.addGenre({genre:eachGame.name}))
    //     })
    //   }
    // );

  }

}
