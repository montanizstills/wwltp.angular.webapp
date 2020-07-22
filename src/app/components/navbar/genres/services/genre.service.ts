import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { Genre } from '../models/genre.model';

export class GenreService{
    constructor(private http: HttpClient){
        // this.http.g
    }

    getGenres():Observable<Genre[]>{
        return of([{id:"Puzzle", subgenres:["One","Two","Three"]}])
    }
}
