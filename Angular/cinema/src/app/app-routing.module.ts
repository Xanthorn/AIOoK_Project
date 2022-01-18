import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieAddComponent } from './movies/movie-add/movie-add.component';
import { MovieDeleteComponent } from './movies/movie-delete/movie-delete.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component:MovieListComponent},
  { path: 'movies/add', component: MovieAddComponent },
  { path: 'movies/edit/:id', component: MovieEditComponent },
  { path: 'movies/delete/:id', component: MovieDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
