import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Genre } from '../models/genre.model';
import { AppState } from './../app.state';

@Component({
  selector: "genres",
  templateUrl: "./genres.component.html",
  styleUrls: ["./genres.component.scss"],
})
export class GenresComponent implements OnInit {
  params;
  genres: Observable<Genre[]>;
  genreTitle;
  subgenreTitles; 
   

  constructor(private store:Store<AppState>) {
    //APICall
  
this.genres=store.select('genre'); //bound to our reducer in app.module.ts
  }

  ngOnInit(): void {}
}
