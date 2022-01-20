import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/models/Movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];

  constructor() { }

  ngOnInit(): void {
    let movie = new Movie();
    movie.id = "1";
    movie.title = "Harry Potter";
    movie.durationHours = 1;
    movie.durationMinutes = 45;
    this.movies.push(movie);
  }

}
