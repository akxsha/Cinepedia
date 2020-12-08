import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiDocumentationComponent } from './api-documentation/api-documentation.component';

const routes: Routes = [{path: 'api-documentation', component:ApiDocumentationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
