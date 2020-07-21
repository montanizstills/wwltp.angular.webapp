import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { GenresComponent } from "./genres/genres.component";
import * as fromGenre from './genres/genre.reducer';

import { StoreModule } from "@ngrx/store";

import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';

import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';

import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';


@NgModule({
  declarations: [AppComponent, GenresComponent],
  // forRoot reducers apply default/startup state
  imports: [BrowserModule, 
    AppRoutingModule, 
    EntityDataModule.forRoot(entityConfig), 
    EffectsModule.forRoot([AppEffects, AppEffects, ]),
    StoreRouterConnectingModule.forRoot(), 
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forFeature(fromGenre.genresFeatureKey, fromGenre.reducer)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
