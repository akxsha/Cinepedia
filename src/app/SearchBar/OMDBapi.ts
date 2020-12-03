import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OMDBapi {

  constructor(private http: HttpClient) { }

  getMovieBySearchTerm(query) {
    return this.http.get(`https://www.omdbapi.com/?apikey=3771a118&s=${query}`);
  }

}