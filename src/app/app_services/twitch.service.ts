import * as env from "../../../ignore/env"
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })

export class TwitchService {
    TWITCH_ACCESS_TOKEN = sessionStorage.getItem('twitch_access_token')

    constructor(private http: HttpClient) {
        // if (!this.TWITCH_ACCESS_TOKEN) {
        //     this.createToken()
        // }
    }

    //redirect -- for client 
    redirect_uri = "http://localhost:4200"

    // auth paths
    s2sPath = "https://id.twitch.tv/oauth2/token?client_id=" + env.TWITCH_CLIENT_ID + "&client_secret=" + env.TWITCH_CLIENT_SECRET + "&grant_type=client_credentials" //sever-to-server, returns token
    clientPath = "https://id.twitch.tv/oauth2/authorize?client_id=" + env.TWITCH_CLIENT_ID + "&redirect_uri=" + this.redirect_uri + "&response_type=token&scope=[]"

    createToken() {
        this.http.post(this.clientPath, {}, {
            headers:
            {
                'Content-Type': "application/json"
            }
        })
            .subscribe(res => sessionStorage.setItem('twitch_access_token', res['access_token']))
    }

    getToken() {
        return sessionStorage.getItem("twitch_access_token")
    }


    /*
    {"Action": "4d1eaa36-f750-4862-b7e9-d0a13970d535"},
    {"Adventure Game": "80427d95-bb46-42d3-bf4d-408e9bdca49a"}
    {"AutoBattler": "cd2ee226-342b-4e6b-90d5-c14687006b04"},
    {"Card & Board Game": "8d39b307-d3ad-4f4a-98a4-d1951f55ceb7"},
    {"Driving/Racing": "f5ed5bd0-78cb-4467-8e13-9172a210b64d"},
    {"Education": "366847c7-b25b-47aa-8e77-e7ec4cdbe9ae"},
    {"Fighting": "9751ee1d-0e5a-4fd3-8e9f-bc3c5d3230f0"},
    {"Flying": "10d820bb-a0a9-40df-b0d3-fe32b45419ee"},
    //Shooting: a69f7ffb-ddda-4c05-8d7d-f0b24975a2c3 (shooting), 523fe736-fa95-44c7-b22f-13008ca2172c (shooter), e607b115-8fa1-49c1-acdf-f6927be4ca1b (shoot 'em up)
    {"Indie": "d72d9de6-1df8-4c4e-b6a2-74e6f4c80557"},
    {"IRL": "2610cff9-10ae-4cb3-8500-778e6722fbb5"},
    {"Horror": "cf0f97ad-efb8-4494-83ec-6a11ca30261b"},
    {"MMORPG": "5495bcba-0977-4ba5-aa39-8928fd4cab8f"},
    {"MOBA": "12510423-d1f6-4992-8aea-1441a43d1df4"},
    {"Mobile": "84719fd0-8b81-4c0f-900d-f78860b1194e"},
    {"Open World": "a682f560-5186-4871-b97a-8d8e3f4308e9"},
    {"Platformer": "5d289cf9-d75a-42b5-a635-0d117609e6a6"},
    {"Puzzle": "7616f6ea-7e3d-4501-a87c-c160d2bc1849"},
    {"RPG": "9d38085e-ee62-4203-877b-81797052a18b"},
    {"RTS": "3e30c47a-26c0-4dd3-9c3a-9cd6ad35589c"}
    {"Simulation": "22e434b6-ca88-46e8-91ef-c18ee1cb8a67"}
    {"Sports": "0d4233af-7ac6-49da-937d-e0f42b7db187"},
    {"Strategy": "857fce92-df0c-4c8c-8c60-28e0c5f7d8ae"},
    {"Survival": "ae7d0652-8b2e-476b-8b51-a076550b234f"}
    get all games with tag id
    get all clips by game id
    */


    //////////////////////////////////////////TWITCH API///////////////////////////////////////

    getLiveVideoURL(videoChannelCollection_id: string) {
        return "https://player.twitch.tv/?video=" + videoChannelCollection_id + "&parent=localhost"
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