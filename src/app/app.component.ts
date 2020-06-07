import { Component } from '@angular/core';
import { LinkserviceService } from './linkservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private linkservice: LinkserviceService) { }
  ngOnInit() {
    this.linkservice.addTag({ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800' });
    this.linkservice.addTag({ rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet' });
  }
  title = 'angular-webapp';
}
