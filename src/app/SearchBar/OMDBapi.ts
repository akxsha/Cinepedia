import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OMDBapi {

  constructor(private http: HttpClient) { }

  getMovieBySearchTerm(title) {
    return this.http.get(`https://www.omdbapi.com/?apikey=3771a118&s=`+title);
  }

  getMovieBySearchID(ID) {
    return this.http.get("https://www.omdbapi.com/?apikey=3771a118&i=" + ID + "&Plot=full")
  }
}