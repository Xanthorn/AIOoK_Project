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
  alphabeticalTitle: boolean = false;
  alphabeticalLength: boolean = false;

  constructor(private moviesService: MoviesService) { }

  async ngOnInit(): Promise<void> {
    this.movies = await this.moviesService.getMovies();
    console.log("Movies was fetched correctly");
  }
  public handleClickTitle() {
    if(this.alphabeticalTitle == false){
      this.movies.sort((a, b) => a.title.localeCompare(b.title));
      this.alphabeticalTitle = true;
      this.alphabeticalLength = false;
    } else {
      this.movies.sort((a, b) => b.title.localeCompare(a.title));
      this.alphabeticalTitle = false;
    }
  }
  public handleClickLength() {
    if(this.alphabeticalLength == false){
      this.movies.sort((first, second) => 0 - (first.durationHours > second.durationHours ? -1 : 1));
      this.alphabeticalLength = true;
      this.alphabeticalTitle = false;
    } else {
      this.movies.sort((first, second) => 0 - (first.durationHours > second.durationHours ? 1 : -1));
      this.alphabeticalLength = false;
    }
  }
}
