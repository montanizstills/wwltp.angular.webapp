import { Component, OnInit } from '@angular/core';
import { MainPageService } from '../mainpage/services/mainpage.service'


@Component({
  selector: 'mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  videos = []
  constructor(private mainpageService: MainPageService) { }

  ngOnInit(): void {
    // this.mainpageService.getVideos().subscribe(
    //   res => {
    //     console.log(res)
    //     res['data'].map(eachVideo => {
    //       console.log(eachVideo)
    //       this.videos.push(eachVideo.thumbnail_url)
    //     })
    //   }
    // )
  this.mainpageService.getTags().subscribe(res=>console.log(res))
  }

}
