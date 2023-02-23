import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  url: string = 'https://api.nasa.gov/planetary/apod?api_key=Y789ehT1oCWmY12obFRxrkAPmUr6u4pYBqtBxZY5';

  constructor(public http: HttpClient) { }

  getImageOfTheDay(): Observable<string>{
    return this.http.get<string>(this.url);
  }
}
