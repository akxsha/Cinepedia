import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component"
import { HomeComponent } from "./home/home.component";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from './login/login.component';
import { SearchBarComponent } from './SearchBar/SearchBar.component';
import { DocumentationComponent } from './documentation/documentation.component';

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
     AppRoutingModule
     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
