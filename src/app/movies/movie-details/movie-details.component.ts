import { Component, Input } from '@angular/core';
import { Movie } from '../movie';
import {MovieService } from '../movie.service';

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  providers: [MovieService]
})

export class MovieDetailsComponent {
  @Input()
  movie: Movie;
  results: any = [];
  constructor (private movieService: MovieService) {}

  getOMDBInfo(title:string, year:string) {
    this.movieService.getMovieBySearchTerm(title,year).subscribe((data:any)=>{
        this.results.push(data);
    });
    }
}