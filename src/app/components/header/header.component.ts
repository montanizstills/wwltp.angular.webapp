import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  list = [
    {
      id: 0,
      name: 'Action',
      date: '',
      isCategory: true
    },
    {
      id: 1,
      name: 'Adventure',
      date: '',
      isCategory: true
    },
    {
      id: 2,
      name: 'Sport',
      date: '',
      isCategory: true
    }
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
