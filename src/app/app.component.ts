import { Component } from "@angular/core";
import { LinkserviceService } from "./linkservice.service";
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import * as GenreActions from './actions/navbar.actions'

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private linkservice: LinkserviceService, private store:Store<AppState>) {}
  ngOnInit() {
    //Rename LinkserviceService to InjectService
    //modify InjectService to add children to tags [body, head, etc.]
    //Remove <Script> from index.html and add to <HERE> this.linkservice.addTag({type:'script',src:'<url>'})
    this.linkservice.addTag({
      rel: "stylesheet",
      href:
        "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
    });
  }
  title = "angular-webapp";
  //make Twitch API call to get Genres
  // genres = ["Action", "Adventure", "Sport"];
  genres = [
    { Action: "['Tekken','StreetFighter','MarioWorld']" },
    { Shooter: "['Call of Duty','BattleField','Fortnite']" },
  ];
  
  // genres=this.addGenre();

  addGenre(key,subgenres){
    this.store.dispatch(new GenreActions.AddGenre({key:key,subgenres:subgenres}))
  }

  //make TwitchAPI call to get subgenres
  //make TwitchAPI call to get game titles.
  //Game titles will fall under Subgenres component
}
