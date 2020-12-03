import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component"
import { HomeComponent } from "./home/home.component";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from './login/login.component';
import { SearchBarComponent } from './SearchBar/SearchBar.component';
import { DocumentationComponent } from './documentation/documentation.component';

import { HttpClientModule } from '@angular/common/http';
import { OMDBapi } from './SearchBar/OMDBapi';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, 
    HomeComponent, 
    SignupComponent,
    LoginComponent,
    SearchBarComponent,
    DocumentationComponent
    ],
  imports: [
    BrowserModule,
     FormsModule,
     AppRoutingModule,
     ReactiveFormsModule,
     HttpClientModule
     ],
  providers: [OMDBapi],
  bootstrap: [AppComponent]
})
export class AppModule {}
