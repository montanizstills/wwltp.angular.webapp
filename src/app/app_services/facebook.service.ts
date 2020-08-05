import * as env from "../../../ignore/env"
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class FacebookService {

    constructor(private http: HttpClient) {
    }

    getFromURL() {
        this.http.get("https://graph.facebook.com/v8.0/?id=https://www.facebook.com?fields=og_object", {
            headers: {
                'Access_Control_Origin': '*'
            },
        }).subscribe(res => {
            console.log(res)  
        })
    }
}