import {Genre} from './genre.model';
export interface AppState{
    readonly genre:Map<String,String[]>;
}