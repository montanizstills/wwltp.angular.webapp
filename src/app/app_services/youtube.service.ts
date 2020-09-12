import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import * as env from "../../../ignore/env"
import {Router} from "@angular/router"


@Injectable({ providedIn: 'root' })
export class YoutubeService {
    constructor(private http: HttpClient,private router: Router) { }

    callYoutubeEndpoint = () => {
        this.http.get("https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=us&key=" + env.YOUTUBE_API_KEY, {
            headers: {
                "Authorization": "Bearer " + sessionStorage.getItem["googleAccessToken"],
                "Accept": "application/json"
            }
        }).subscribe(res => console.log(res))
    }
}