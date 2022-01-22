import { Component, OnInit } from '@angular/core';
import { Show } from 'src/models/Show';
import { ShowsService } from 'src/services/shows.service';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.css']
})
export class ShowsListComponent implements OnInit {
  shows: Show[] = [];

  alphabeticalDate: boolean = false;
  alphabeticalMovie: boolean = false;
  alphabeticalAuditorium: boolean = false;
  alphabeticalSoldTickets: boolean = false;
  alphabeticalAvailableTickets: boolean = false;

  constructor(private showsService: ShowsService) { }

  async ngOnInit(): Promise<void> {
    this.shows = await this.showsService.getShows();
    console.log("Shows was fetched correctly");
  }

  public handleClickDate() {
    if(this.alphabeticalDate == false){
      this.shows.sort((a, b) => a.date.toString().localeCompare(b.date.toString()));
      this.alphabeticalDate = true;
      this.alphabeticalMovie = false;
      this.alphabeticalAuditorium = false;
      this.alphabeticalSoldTickets = false;
      this.alphabeticalAvailableTickets = false;
    } else {
      this.shows.sort((a, b) => b.date.toString().localeCompare(a.date.toString()));
      this.alphabeticalDate = false;
    }
  }
  public handleClickMovie() {
    if(this.alphabeticalMovie == false){
      this.shows.sort((a, b) => a.movie.title.localeCompare(b.movie.title));
      this.alphabeticalMovie = true;
      this.alphabeticalDate = false;
      this.alphabeticalAuditorium = false;
      this.alphabeticalSoldTickets = false;
      this.alphabeticalAvailableTickets = false;
    } else {
      this.shows.sort((a, b) => b.movie.title.localeCompare(a.movie.title));
      this.alphabeticalMovie = false;
    }
  }
  public handleClickAuditorium() {
    if(this.alphabeticalAuditorium == false){
      this.shows.sort((first, second) => 0 - (first.auditorium.number > second.auditorium.number ? -1 : 1));
      this.alphabeticalAuditorium = true;
      this.alphabeticalDate = false;
      this.alphabeticalMovie = false;
      this.alphabeticalSoldTickets = false;
      this.alphabeticalAvailableTickets = false;
    } else {
      this.shows.sort((first, second) => 0 - (first.auditorium.number > second.auditorium.number ? 1 : -1));
      this.alphabeticalAuditorium = false;
    }
  }
  public handleClickAvailableTickets() {
    if(this.alphabeticalAvailableTickets == false){
      this.shows.sort((first, second) => 0 - (first.availableTickets > second.availableTickets ? -1 : 1));
      this.alphabeticalAvailableTickets = true;
      this.alphabeticalDate = false;
      this.alphabeticalAuditorium = false;
      this.alphabeticalMovie = false;
      this.alphabeticalSoldTickets = false;
    } else {
      this.shows.sort((first, second) => 0 - (first.availableTickets > second.availableTickets ? 1 : -1));
      this.alphabeticalAvailableTickets = false;
    }
  }
  public handleClickSoldTickets() {
    if(this.alphabeticalSoldTickets == false){
      this.shows.sort((first, second) => 0 - (first.soldTickets > second.soldTickets ? -1 : 1));
      this.alphabeticalSoldTickets = true;
      this.alphabeticalDate = false;
      this.alphabeticalAuditorium = false;
      this.alphabeticalMovie = false;
      this.alphabeticalAvailableTickets = false;
    } else {
      this.shows.sort((first, second) => 0 - (first.soldTickets > second.soldTickets ? 1 : -1));
      this.alphabeticalSoldTickets = false;
    }
  }
}
