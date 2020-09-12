import * as env from "../../../ignore/env"
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class FacebookService {

    constructor(private http: HttpClient) {
    }

    postMessageToFacebookPage(message){
        this.http.post("https://graph.facebook.com/111250593830954/feed?message="+message+"&access_token="+sessionStorage.getItem("facebook"),{})
    }
}