// import { Action } from "@ngrx/store";
import * as GenreActions from "../actions/navbar.actions";
import { Genre } from "../models/genre.model";

//  const defaultState:Genre[] = (newGenre) => {
//   //define default state.
//   return newGenre.forEach(element=>{
//     defaultState.push(element);
//   });
// }

//define default state.
const defaultState = new Genre();
defaultState.set("Puzzle", ["Soduku", "Rubix,", "Jenga"]);
defaultState.set("Action", ["MarioWorld", "Enter the Matrix", "World of Warcraft"]);
console.log(defaultState)

export function GenreReducer(
  state:Genre[] = [defaultState],
  action: GenreActions.Actions
) {
  switch (action.type) {
    case GenreActions.ADD_GENRE:
      return [...state, action.payload];
    default:
      return state;
  }
}
