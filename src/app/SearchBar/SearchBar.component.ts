import { Component, OnInit} from '@angular/core';
import { OMDBapi } from './OMDBapi';


@Component({
  selector: 'appSearchBar',
  templateUrl: './SearchBar.component.html',
  styleUrls: ['./SearchBar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private omdbapi:OMDBapi) {}
  imdbIDs: any = [];
  results: any = [];
  ID: any;

  searchreset(){this.imdbIDs=[];}
  getinput(name) {
    this.searchreset();
    this.omdbapi.getMovieBySearchTerm(name).subscribe((data: any) => {
        this.results = data.Search;
        for(var i of this.results){
        this.ID = i.imdbID;
        this.omdbapi.getMovieBySearchID(this.ID).subscribe((datas: any) => {
        this.imdbIDs.push(datas);
        })
      }
    })
    }

  ngOnInit(){}     
}
