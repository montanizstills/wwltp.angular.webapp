import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { Genre } from '../models/genre.model';
import { Injectable } from '@angular/core';
import * as env from "ignore/env"

@Injectable({ providedIn: 'root' })

export class GenreService {

    constructor(private http: HttpClient) {
    
    }

    //called in effect    
    getGenres(): Observable<Genre[]> {
        return this.http.get<Genre[]>("");
    }

    //redirect -- for client 
    redirect = "http://localhost:4200"

    // auth paths
    s2sPath = "https://id.twitch.tv/oauth2/token?client_id=" + env.TWITCH_CLIENT_ID + "&client_secret=" + env.TWITCH_CLIENT_SECRET + "&grant_type=client_credentials" //sever-to-server, returns token
    clientPath = "https://id.twitch.tv/oauth2/authorize?client_id=" + env.TWITCH_CLIENT_ID + "&redirect_uri=" + this.redirect + "&response_type=token&scope=[]"

    createToken() {
        this.http.post(this.s2sPath, null, {
            headers:
            {
                'Content-Type': "application/json"
            }
        })
            .subscribe(res => sessionStorage.setItem('access_token', res['access_token']))
    }

    getToken() {
        return sessionStorage.getItem("access_token")
    }

    getTopGames() {
      return this.http.get("https://api.twitch.tv/helix/games/top", {
            headers:
            {
                'Content-Type': "application/json",
                'Authorization': "Bearer " + this.getToken(),
                'Client-ID': env.TWITCH_CLIENT_ID
            }
        })
    }

}
