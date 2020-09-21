import { Injectable } from '@angular/core';
import Parser from 'rss-parser';

@Injectable({ providedIn: 'root' })
export class NewsService {
    constructor(){
       let parser = new Parser(); // async/await
       parser.parseURL("https://www.reddit.com/r/esports/.rss",feed=>{
        console.log(feed)
       })
    }
}