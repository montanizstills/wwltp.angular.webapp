import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GenresComponent } from "./genres/genres.component";
import { StoreModule } from "@ngrx/store";

import { GenreReducer } from "./reducers/genre.reducer";
@NgModule({
  declarations: [AppComponent, GenresComponent],
  // forRoot reducers apply default/startup state
  imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot({genre:GenreReducer})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
