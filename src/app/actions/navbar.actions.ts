import {createAction, props } from "@ngrx/store";

export const ADD_GENRE = createAction("[Genre] Add",props<Map<String,String[]>>());
export const REMOVE_GENRE = createAction("[Genre] Remove",props<String>());