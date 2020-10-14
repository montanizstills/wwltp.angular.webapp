import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() item;
  @Output() deletePorperty = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    this.deletePorperty.emit(this.item)
  }
}
