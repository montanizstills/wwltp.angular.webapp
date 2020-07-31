import { Component, OnInit } from '@angular/core';
import { MainPageService } from '../mainpage/services/mainpage.service'
import {GenresComponent} from '../navbar/genres/genres.component'

@Component({
  selector: 'mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  
  videos = []
  
  constructor(private mainpageService: MainPageService) { }

  ngOnInit(): void {  

  }
  
}
