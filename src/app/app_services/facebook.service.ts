import * as env from "../../../ignore/env"
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class FacebookService {

    constructor(private http: HttpClient) {
    }

    getFromURL(token) {
        this.http.get("https://graph.facebook.com/544569746165737/accounts?access_token="+token, {
            headers: {
                'Access_Control_Origin': '*',
                'Content_Type':"application/x-www-form-urlencoded/"
            },
        }).subscribe(res => {
            console.log(res)  
        })
    }
}