import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Genre } from 'src/app/models/genre.model';

export const ADD_GENRE = '[Genre] Add';
export const REMOVE_GENRE = "[Genre] Remove";


export class AddGenre implements Action{
    readonly type = ADD_GENRE;
    constructor(public payload: Genre){}
}

export class RemoveGenre implements Action{
    readonly type = REMOVE_GENRE;
    constructor(public payload: Genre){}
}

//references actions, make a seperate file to reference all types of Actions.
export type Actions = AddGenre | RemoveGenre