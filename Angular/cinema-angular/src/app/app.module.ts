import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { ShowDetailsComponent } from './shows/show-details/show-details.component';
import { ShowsListComponent } from './shows/shows-list/shows-list.component';
import { ShowAddComponent } from './shows/show-add/show-add.component';
import { ShowEditComponent } from './shows/show-edit/show-edit.component';
import { ShowDeleteComponent } from './shows/show-delete/show-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MoviesComponent,
    EditMovieComponent,
    DeleteMovieComponent,
    AddMovieComponent,
    ShowDetailsComponent,
    ShowsListComponent,
    ShowAddComponent,
    ShowEditComponent,
    ShowDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
