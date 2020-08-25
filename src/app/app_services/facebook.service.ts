import * as env from "../../../ignore/env"
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class FacebookService {

    constructor(private http: HttpClient) {
    }

    async getFromURL() {
        var token
        await this.http.get("http://localhost:8080/server/myfacebookapi", {
            headers: {
                'Access_Control_Origin': '*',
                'Content_Type': "application/json"
            },
        }).toPromise().then(res => {
            res.forEach(element => {
                let obj = element['identities']
                obj.forEach(element => {
                    if (element['provider'] == 'facebook')
                        token = element['access_token']
                });
            });
        })
        return token
    }
}