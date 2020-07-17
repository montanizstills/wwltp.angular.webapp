import * as GenreActions from "../actions/navbar.actions";
import { Action } from 'rxjs/internal/scheduler/Action';
import { on, createReducer } from '@ngrx/store';

//define default state.
export const defaultState: Map<String, String[]> = new Map();
defaultState.set("Puzzle", ["Soduku", "Rubix,", "Jenga"]);
defaultState.set("Action", ["MarioWorld", "Enter the Matrix", "World of Warcraft"])

const _genreReducerAddGenre = (k, v) => createReducer(defaultState, on(GenreActions.ADD_GENRE, defaultState => defaultState.set(k, v)));
const _genreReducerRemoveGenre = k => createReducer(defaultState, on(GenreActions.REMOVE_GENRE, defaultState => {defaultState.delete(k); return defaultState}));

export function GenreReducer(state: Map<String, String[]> = defaultState, action: Action.ADD_GENRE) {
  switch (action.type) {
    case GenreActions.ADD_GENRE:
      return _genreReducerAddGenre(state, action);
    case GenreActions.REMOVE_GENRE:
      return _genreReducerRemoveGenre(state, action)
    default:
      return state;
  }
}
