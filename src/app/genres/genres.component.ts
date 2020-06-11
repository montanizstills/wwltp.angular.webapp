import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  title;
  subgenres;

  constructor() {
    //APICall
  }

  ngOnInit(): void {
  }

}

