import { Component } from "@angular/core";
import { DependencyInjectionService } from "./dependencyinjection.service";
import { Genre } from "./models/genre.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(
    private linkservice: DependencyInjectionService,
  ) {}
  ngOnInit() {
    // Add all dependencies via AppComponent
    // TODO-modify DependencyInjectionService to add children to tags [body, head, etc.]
    // TODO-Remove <Script> from index.html and add to <HERE> this.linkservice.addTag({type:'script',src:'<url>'})
    this.linkservice.addTag({
      rel: "stylesheet",
      href:
        "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
    });

    const TWITCH_GAME_DATA: Genre[] = null;
    const REFRESH = () => {
      // return this.store.dispatch(new GenreActions.AddGenre({key,values});
    };
  }
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

  // Initialize Footer
  // Set CommunityCenter chatbox left,
}
