import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

}
