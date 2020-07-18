import * as GenreActions from "../actions/navbar.actions";
import { on, createReducer, State, Action } from '@ngrx/store';

//define default state.
export const defaultState: Map<String, String[]> = new Map();

defaultState.set("Puzzle", ["Soduku", "Rubix,", "Jenga"]);
defaultState.set("Action", ["MarioWorld", "Enter the Matrix", "World of Warcraft"])

const _reducerAddGenre = (k: String, v: String[]) =>
  createReducer(
    defaultState,
    on(
      GenreActions.ADD_GENRE,
      defaultState => defaultState.set(k, v)
    ));

const _reducerRemoveGenre = (k: String) =>
  createReducer(
    defaultState,
    on(
      GenreActions.REMOVE_GENRE,
      defaultState => {
        defaultState.delete(k);
        return defaultState
      }
    ));

export function GenreReducer(state = defaultState, action: Action) {
  switch (action.type) {
    case GenreActions.ADD_GENRE:
      return _reducerAddGenre(state, action);
    case GenreActions.REMOVE_GENRE:
      return _reducerRemoveGenre(state)
    default:
      return defaultState
  }
}
