import {Genre} from './models/genre.model';
export interface AppState{
    readonly genre:Map<String,String[]>;
}