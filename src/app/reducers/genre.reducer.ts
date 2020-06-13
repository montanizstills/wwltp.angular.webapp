import { Action } from "@ngrx/store";
import * as GenreActions from "../actions/navbar.actions";
import { Genre } from "../models/genre.model";

const defaultState: Genre = {
  //define default state.
  key: "Action",
  subgenres: ["Fighter", "Adventure", "Platformer"],
};

export function GenreReducer(
  state: Genre[] = [defaultState],
  action: GenreActions.Actions
) {
    switch(action.type){
        case GenreActions.ADD_GENRE:
            return [...state,action.payload];
            default:
                return state;
    }
}
