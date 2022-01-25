import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarDayComponent } from './calendar/calendar-day/calendar-day.component';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { MovieAddComponent } from './movies/movie-add/movie-add.component';
import { MovieDeleteComponent } from './movies/movie-delete/movie-delete.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MoviePopularityComponent } from './movies/movie-popularity/movie-popularity.component';
import { ShowAddComponent } from './shows/show-add/show-add.component';
import { ShowDeleteComponent } from './shows/show-delete/show-delete.component';
import { ShowEditComponent } from './shows/show-edit/show-edit.component';
import { ShowsCurrentComponent } from './shows/shows-current/shows-current.component';
import { ShowsListComponent } from './shows/shows-list/shows-list.component';
import { BuyTicketComponent } from './tickets/buy-ticket/buy-ticket.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component:MovieListComponent},
  { path: 'movies/add', component: MovieAddComponent },
  { path: 'movies/edit/:id', component: MovieEditComponent },
  { path: 'movies/delete/:id', component: MovieDeleteComponent },
  { path: 'movies/popularity', component: MoviePopularityComponent },
  { path: 'shows', component: ShowsListComponent},
  { path: 'shows/add', component: ShowAddComponent },
  { path: 'shows/edit/:id', component:ShowEditComponent },
  { path: 'shows/delete/:id', component: ShowDeleteComponent },
  { path: 'shows/now', component: ShowsCurrentComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'calendar/:year/:month/:day', component: CalendarDayComponent },
  { path: 'shows/buy-ticket/:id', component: BuyTicketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
