import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {GenreService} from '../../navbar/genres/services/genre.service'

import * as env from '../../../../../ignore/env';

@Injectable({ providedIn: 'root' })
export class MainPageService{
    constructor(private http:HttpClient, private genreService:GenreService){}
    
    getVideos(){
       return this.http.get("https://api.twitch.tv/helix/streams",{
            headers: {
                'Content-Type': "application/json",
                'Authorization': "Bearer " + this.genreService.getToken(),
                'Client-ID': env.TWITCH_CLIENT_ID
            }
        })
    }
    getTags(){
        return this.http.get("https://api.twitch.tv/helix/tags/streams",{
            headers: {
                'Content-Type': "application/json",
                'Authorization': "Bearer " + this.genreService.getToken(),
                'Client-ID': env.TWITCH_CLIENT_ID
            }
        })
    }
}