import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GenresComponent } from "./genres/genres.component";

import { StoreModule } from "@ngrx/store";
import { GenreReducer } from "./reducers/genre.reducer";

import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';

@NgModule({
  declarations: [AppComponent, GenresComponent],
  // forRoot reducers apply default/startup state
  imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot({genre:GenreReducer}), EntityDataModule.forRoot(entityConfig), EffectsModule.forRoot([AppEffects, AppEffects, ])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
