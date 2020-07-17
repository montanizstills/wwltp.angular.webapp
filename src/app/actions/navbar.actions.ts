import {createAction, props } from "@ngrx/store";

export const ADD_GENRE = createAction("[Genre] Add",props<{key:string;value:string[]}>());
export const REMOVE_GENRE = createAction("[Genre] Remove",props<{key:string}>());