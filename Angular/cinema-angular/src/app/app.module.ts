import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MoviesComponent,
    EditMovieComponent,
    DeleteMovieComponent,
    AddMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
