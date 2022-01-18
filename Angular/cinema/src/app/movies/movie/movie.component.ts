import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/models/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input("movies") movies: Movie[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
