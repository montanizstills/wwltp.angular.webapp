import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http"

import { GenresComponent } from "./components/navbar/genres/genres.component";
import * as fromGenreState from './components/navbar/genres';
import { GenreEffects } from "./components/navbar/genres/effects/genre.effects"

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
    HttpClientModule,

    StoreModule.forRoot({}, {}),
    StoreModule.forFeature(fromGenreState.genreStateFeatureKey, fromGenreState.reducers, { metaReducers: fromGenreState.metaReducers }),

    EntityDataModule.forRoot(entityConfig),

    EffectsModule.forRoot([AppEffects]),
    EffectsModule.forFeature([GenreEffects]),

    StoreRouterConnectingModule.forRoot(),

    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
