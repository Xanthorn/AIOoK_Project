import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/models/Movie';
import { MoviesService } from 'src/services/movies.service';

@Component({
  selector: 'app-movie-delete',
  templateUrl: './movie-delete.component.html',
  styleUrls: ['./movie-delete.component.css']
})
export class MovieDeleteComponent implements OnInit {

  id?: string | null = '';
  movie!: Movie;

  constructor(private moviesService: MoviesService, private router: Router, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.paramMap.get('id');

    if(this.id !== null) {
      this.movie = await this.moviesService.getMovieById(this.id);
    }
  }

  async deleteMovie() {
    this.id = this.route.snapshot.paramMap.get('id');
    await this.moviesService.deleteMovie(this.id!)

    this.router.navigateByUrl("/movies");
  }
}
