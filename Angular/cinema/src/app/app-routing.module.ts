import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieAddComponent } from './movies/movie-add/movie-add.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component:MovieListComponent},
  { path: 'movies/add', component: MovieAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
