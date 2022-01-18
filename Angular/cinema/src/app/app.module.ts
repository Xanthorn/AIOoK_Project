import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MovieAddComponent } from './movies/movie-add/movie-add.component';
import { MovieComponent } from './movies/movie/movie.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieDeleteComponent } from './movies/movie-delete/movie-delete.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MovieAddComponent,
    MovieComponent,
    MovieListComponent,
    MovieDeleteComponent
    MovieEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
