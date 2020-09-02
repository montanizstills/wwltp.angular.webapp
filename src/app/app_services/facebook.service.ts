import * as env from "../../../ignore/env"
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class FacebookService {

    constructor(private http: HttpClient) {
    }

    
}