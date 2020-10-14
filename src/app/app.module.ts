import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MyDirective } from './directives/myDirective.directive';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    MyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [CommonModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
