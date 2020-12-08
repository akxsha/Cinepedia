import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { ApiDocumentationComponent } from './api-documentation/api-documentation.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';

const routes: Routes = [
  {path: 'api-documentation', component:ApiDocumentationComponent},
  {path: 'nominations', component:MovieListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
