import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {

  }

  getNewsFromServer = async (address) => {
    this.http.post("https://localhost:8080/server/news",address, {})
      .subscribe(resp => { console.log(resp) })
  }
}
