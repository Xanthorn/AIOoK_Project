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
import { ShowDetailsComponent } from './shows/show-details/show-details.component';
import { ShowsListComponent } from './shows/shows-list/shows-list.component';
import { ShowAddComponent } from './shows/show-add/show-add.component';
import { ShowEditComponent } from './shows/show-edit/show-edit.component';
import { ShowDeleteComponent } from './shows/show-delete/show-delete.component';
import { HttpClientModule } from '@angular/common/http';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { CalendarGeneratorComponent } from './calendar/calendar-generator/calendar-generator.component';
import { CalendarDayComponent } from './calendar/calendar-day/calendar-day.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MovieAddComponent,
    MovieComponent,
    MovieListComponent,
    MovieDeleteComponent,
    MovieEditComponent,
    ShowDetailsComponent,
    ShowsListComponent,
    ShowAddComponent,
    ShowEditComponent,
    ShowDeleteComponent,
    CalendarComponent,
    CalendarGeneratorComponent,
    CalendarDayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
