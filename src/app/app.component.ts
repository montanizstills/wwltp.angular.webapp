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

  // fbLibrary() {

  //   (window as any).fbAsyncInit = function () {
  //     console.log(window['FB'])
  //     window['FB'].init({
  //       appId: env.FACEBOOK_APP_ID,
  //       cookie: true,
  //       xfbml: true,
  //       version: 'v3.1'
  //     });
  //     window['FB'].AppEvents.logPageView();
  //   };

  //   (function (d, s, id) {
  //     var js, fjs = d.getElementsByTagName(s)[0];
  //     if (d.getElementById(id)) { return; }
  //     js = d.createElement(s); js.id = id;
  //     js.src = "https://connect.facebook.net/en_US/sdk.js";
  //     fjs.parentNode.insertBefore(js, fjs);
  //   }(document, 'script', 'facebook-jssdk'));

  // }

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


    // (window as any).fbAsyncInit = function () {
    //   window['FB'].init({
    //     appId: env.FACEBOOK_APP_ID,
    //     cookie: true,
    //     xfbml: true,
    //     version: 'v3.1'
    //   });
    //   window['FB'].AppEvents.logPageView();
    //   window['FB'].api(
    //     "?id=https://www.facebook.com",
    //     {
    //       "fields": "engagement"
    //     },
    //     (response) => {
    //       console.log(response)
    //     }
    //   )
    // };

    // (function (d, s, id) {
    //   var js, fjs = d.getElementsByTagName(s)[0];
    //   if (d.getElementById(id)) { return; }
    //   js = d.createElement(s); js.id = id;
    //   js.src = "https://connect.facebook.net/en_US/sdk.js";
    //   fjs.parentNode.insertBefore(js, fjs);
    // }(document, 'script', 'facebook-jssdk'));

    

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

  // Initialize Footer
  // Set CommunityCenter chatbox left,
}
