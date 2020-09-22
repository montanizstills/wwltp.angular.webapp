import { Component } from "@angular/core";
import { DependencyInjectionService } from "./dependencyinjection.service";
import { Genre } from "./components/navbar/genres/models/genre.model";
import * as env from '../../ignore/env'

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {

  constructor(
    private linkservice: DependencyInjectionService,
  ) { }

  ngOnInit() {

    // Add all dependencies via AppComponent
    // TODO-modify DependencyInjectionService to add children to tags [body, head, etc.]
    // TODO-Remove <Script> from index.html and add to <HERE> this.linkservice.addTag({type:'script',src:'<url>'})
    // Edit DependencyInjection service addTag method to accept annoynmous functions
    this.linkservice.addTag({
      rel: "stylesheet",
      href:
        "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
    });




  }//End OnInit()

  // loadMovies$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType('[Movies Page] Load Movies'),
  //     mergeMap(() => this.moviesService.getAll()
  //       .pipe(
  //         map(movies => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
  //         catchError(() => of({ type: '[Movies API] Movies Loaded Error' }))
  //       )
  //     )
  //   )
  // );
  title = "angular-webapp";

  //make Twitch API call to get Genres
  //make TwitchAPI call to get subgenres
  //make TwitchAPI call to get game titles.
  //make seperate SubGenres component, game titles will fall under Subgenres component


  // Initialize MainPage
  //make YoutubeAPI calls to add content to live videos 
  
  // Initialize Footer
  // Set CommunityCenter chatbox left, Set News,Ranking on right
}
