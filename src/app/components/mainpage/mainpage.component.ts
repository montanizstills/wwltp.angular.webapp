import { Component, OnInit } from '@angular/core';
import { MainPageService } from '../mainpage/services/mainpage.service'
import { GenresComponent } from '../navbar/genres/genres.component'
import { TwitchService } from 'src/app/app_services/twitch.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import * as env from '../../../../ignore/env'
import { FacebookService } from '../../app_services/facebook.service'
import { DependencyInjectionService } from 'src/app/dependencyinjection.service';
@Component({
  selector: 'mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  videos = []
  
  constructor(private mainpageService: MainPageService, private twitchService: TwitchService, private domSanitizer: DomSanitizer, private http: HttpClient, private facebookService: FacebookService) { }

  ngOnInit(): void {
    //for videoID in catagories: <iframe/> embedded videos
    this.videos.push(this.domSanitizer.bypassSecurityTrustResourceUrl(this.twitchService.getLiveVideoURL("4d1eaa36-f750-4862-b7e9-d0a13970d535")));
  }

}
