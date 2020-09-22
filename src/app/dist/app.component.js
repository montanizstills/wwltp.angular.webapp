"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent(linkservice) {
        this.linkservice = linkservice;
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
        this.title = "angular-webapp";
    }
    AppComponent.prototype.ngOnInit = function () {
        // Add all dependencies via AppComponent
        // TODO-modify DependencyInjectionService to add children to tags [body, head, etc.]
        // TODO-Remove <Script> from index.html and add to <HERE> this.linkservice.addTag({type:'script',src:'<url>'})
        // Edit DependencyInjection service addTag method to accept annoynmous functions
        this.linkservice.addTag({
            rel: "stylesheet",
            href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        });
    }; //End OnInit()
    AppComponent = __decorate([
        core_1.Component({
            selector: "app-root",
            templateUrl: "./app.component.html",
            styleUrls: ["./app.component.scss"]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
