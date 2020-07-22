import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

export class GenreService{
    constructor(private http: HttpClient){
        // this.http.g
    }

    getGenres(){
        return of({id:"Puzzle", subgenres:["One","Two","Three"]})
    }
}
