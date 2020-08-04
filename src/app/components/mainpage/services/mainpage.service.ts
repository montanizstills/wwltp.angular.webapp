import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {GenreService} from '../../navbar/genres/services/genre.service'

import * as env from '../../../../../ignore/env';

@Injectable({ providedIn: 'root' })
export class MainPageService{
    constructor(private http:HttpClient, private genreService:GenreService){}

}