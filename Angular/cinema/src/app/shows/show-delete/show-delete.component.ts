import { Component, OnInit } from '@angular/core';
import { Auditorium } from 'src/models/Auditorium';
import { Movie } from 'src/models/Movie';
import { Show } from 'src/models/Show';

@Component({
  selector: 'app-show-delete',
  templateUrl: './show-delete.component.html',
  styleUrls: ['./show-delete.component.css']
})
export class ShowDeleteComponent implements OnInit {

  show: Show = {
    id: "1",
    date: new Date,
    movie: new Movie,
    auditorium: new Auditorium,
    soldTickets: 10,
    availableTickets: 2
  }

  constructor() { }

  ngOnInit(): void {
  }

  deleteShow(){
    
  }
}
