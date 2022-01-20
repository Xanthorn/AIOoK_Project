import { Component, OnInit } from '@angular/core';
import { Auditorium } from 'src/models/Auditorium';
import { Movie } from 'src/models/Movie';
import { Show } from 'src/models/Show';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.css']
})
export class ShowsListComponent implements OnInit {
  shows: Show[] = [];

  constructor() { }

  ngOnInit(): void {
    let show = new Show();
    show.id = "1";
    show.date = new Date();
    show.auditorium = new Auditorium;
    show.movie = new Movie;
    show.availableTickets = 20;
    show.soldTickets = 1;
    this.shows.push(show);
  }
}
