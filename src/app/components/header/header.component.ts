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
      date: '10/31/2003',
      isCategory: true,
      fontFamily:'cursive'
    },
    {
      id: 1,
      name: 'Adventure',
      date: '04/01/1999',
      isCategory: true
    },
    {
      id: 2,
      name: 'Sport',
      date: '08/07/1955',
      isCategory: false
    }
  ];



  constructor() { }

  ngOnInit(): void {
  }

  onItemDelete(item) {

  }
}
