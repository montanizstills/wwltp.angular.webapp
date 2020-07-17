import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { AppState } from "./../app.state";

@Component({
  selector: "genres",
  templateUrl: "./genres.component.html",
  styleUrls: ["./genres.component.scss"]
})
export class GenresComponent implements OnInit {
  // genres: Observable<Map<String, String[]>>;
  genres
  subgenres = [1, 2, 3]

  constructor(private store: Store<AppState>) {
    //APICall, initialization
    this.genres = this.store.select("genre").subscribe(map=>{console.log(map)}); //bound to our reducer in app.module.ts 
    //subscribe and pull data from Observable
   
  }

  ngOnInit(): void { }
}
