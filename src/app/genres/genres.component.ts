import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { Genre } from "../models/genre.model";
import { AppState } from "./../app.state";

@Component({
  selector: "genres",
  templateUrl: "./genres.component.html",
  styleUrls: ["./genres.component.scss"]
})
export class GenresComponent implements OnInit {
  genres: Observable<Genre>;
  subgenres=[1,2,3];

  constructor(private store: Store<AppState>) {
    //APICall, initialization
    this.genres = store.select("genre"); //bound to our reducer in app.module.ts 
    console.log(this.genres)
  }

  ngOnInit(): void { }
}
