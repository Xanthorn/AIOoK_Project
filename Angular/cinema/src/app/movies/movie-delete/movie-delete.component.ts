import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/models/Movie';

@Component({
  selector: 'app-movie-delete',
  templateUrl: './movie-delete.component.html',
  styleUrls: ['./movie-delete.component.css']
})
export class MovieDeleteComponent implements OnInit {

  movie: Movie = {
    id: "1",
    title: "Epoka lodowcowa",
    durationHours: 1,
    durationMinutes: 45
  }

  constructor() { }

  ngOnInit(): void {
  }

  deleteMovie() {
  }
}
