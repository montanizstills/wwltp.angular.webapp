import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {

  }

  getNewsFromServer = (address) => {
    this.http.post("http://localhost:8080/server/news", address, {
      headers:
      {
        'Content-Type': "application/json"
      }
    })
      .subscribe(resp => { console.log(resp) })
  }

}