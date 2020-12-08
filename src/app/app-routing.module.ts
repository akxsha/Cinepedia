import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { ApiDocumentationComponent } from './api-documentation/api-documentation.component';

const routes: Routes = [{ path: 'apidoc', loadChildren: () => import('./apidoc/apidoc.module').then(m => m.ApidocModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
