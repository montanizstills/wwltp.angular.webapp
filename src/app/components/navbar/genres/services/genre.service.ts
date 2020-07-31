import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { Genre } from '../models/genre.model';
import { Injectable } from '@angular/core';
import * as env from "ignore/env"
import {TwitchService} from '../../../../app_services/twitch.service'

@Injectable({ providedIn: 'root' })

export class GenreService {

    constructor(private http: HttpClient, private twitchService:TwitchService) {
    
    }

    //called in effect    
    getGenres(): Observable<Genre[]> {
        return this.http.get<Genre[]>("");
    }


}
