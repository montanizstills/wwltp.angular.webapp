import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import * as env from "../../../ignore/env"

@Injectable({ providedIn: 'root' })
export class YoutubeService {
    constructor(private http: HttpClient) { }

    getYoutubeCategoryIds() {
        this.http.get("https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=us&key="+env.YOUTUBE_API_KEY,{
            headers:{
                "Authorization":"Bearer "+sessionStorage.getItem["google_firstparty_access_token"],
                "Accept":"application/json"
            }
        }).subscribe(res=>console.log(res))
    }
}