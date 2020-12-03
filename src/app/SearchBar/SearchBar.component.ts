import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OMDBapi } from './OMDBapi';
import { map, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'appSearchBar',
  templateUrl: './SearchBar.component.html',
  styleUrls: ['./SearchBar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchControl: FormControl;
  movies$: Observable<any[]>;
  constructor(private omdbapi:OMDBapi) {}

  ngOnInit(){
    this.searchControl = new FormControl();

    this.movies$ = this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(
          searchString => this.omdbapi.getMovieBySearchTerm(searchString)
        ),
        map((res:any) => res.Search)
      );
  }
}