import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/models/Movie';
import { MoviesService } from 'src/services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private moviesService: MoviesService) { }

  async ngOnInit(): Promise<void> {
    this.movies = await this.moviesService.getMovies();
    console.log("Movies was fetched correctly");
  }

}
