import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { AppState } from "./../app.state";
import { ADD_GENRE } from '../actions/navbar.actions';

@Component({
  selector: "genres",
  templateUrl: "./genres.component.html",
  styleUrls: ["./genres.component.scss"]
})
export class GenresComponent implements OnInit {
  genres$: Observable<Map<String, String[]>>;
  // subgenres = [1, 2, 3]

  constructor(private store: Store<AppState>) {
    //APICall, initialization
    this.store.dispatch(ADD_GENRE(new Map().set("Test","Data")));
    this.genres$ = store.select("genre") //bound to our reducer in app.module.ts 
    // .subscribe(map=>{console.log(map)});
    
    //subscribe and pull data from Observable
   
  }

  ngOnInit(): void {
   }
}
