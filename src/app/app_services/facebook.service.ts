import * as env from "../../../ignore/env"
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class FacebookService {

    constructor(private http: HttpClient) {
        
    }


    access_fragment="&access_token="+sessionStorage.getItem("facebook")

    postMessageToFacebookPage(message){
        this.http.post("https://graph.facebook.com/111250593830954/feed?message="+message+this.access_fragment,{})
    }

    getPageFeed(page_id){
        this.http.get("https://graph.facebook.com/"+page_id+"/feed?"+this.access_fragment).subscribe(res=>console.log(res))
    }
}