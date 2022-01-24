import { Component, OnInit } from '@angular/core';
import { Show } from 'src/models/Show';
import { ShowsService } from 'src/services/shows.service';

@Component({
  selector: 'app-shows-current',
  templateUrl: './shows-current.component.html',
  styleUrls: ['./shows-current.component.css']
})
export class ShowsCurrentComponent implements OnInit {
  currentShows: Show[] = [];

  alphabeticalDate: boolean = false;
  alphabeticalMovie: boolean = false;
  alphabeticalAuditorium: boolean = false;
  alphabeticalSoldTickets: boolean = false;
  alphabeticalAvailableTickets: boolean = false;

  constructor(private showsService: ShowsService) { }

  async ngOnInit(): Promise<void> {
    this.currentShows = await this.showsService.getCurrentShows();
    console.log("Current shows was fetched correctly");
  }

  public handleClickDate() {
    if(this.alphabeticalDate == false){
      this.currentShows.sort((a, b) => a.date.toString().localeCompare(b.date.toString()));
      this.alphabeticalDate = true;
      this.alphabeticalMovie = false;
      this.alphabeticalAuditorium = false;
      this.alphabeticalSoldTickets = false;
      this.alphabeticalAvailableTickets = false;
    } else {
      this.currentShows.sort((a, b) => b.date.toString().localeCompare(a.date.toString()));
      this.alphabeticalDate = false;
    }
  }
  public handleClickMovie() {
    if(this.alphabeticalMovie == false){
      this.currentShows.sort((a, b) => a.movie.title.localeCompare(b.movie.title));
      this.alphabeticalMovie = true;
      this.alphabeticalDate = false;
      this.alphabeticalAuditorium = false;
      this.alphabeticalSoldTickets = false;
      this.alphabeticalAvailableTickets = false;
    } else {
      this.currentShows.sort((a, b) => b.movie.title.localeCompare(a.movie.title));
      this.alphabeticalMovie = false;
    }
  }
  public handleClickAuditorium() {
    if(this.alphabeticalAuditorium == false){
      this.currentShows.sort((first, second) => 0 - (first.auditorium.number > second.auditorium.number ? -1 : 1));
      this.alphabeticalAuditorium = true;
      this.alphabeticalDate = false;
      this.alphabeticalMovie = false;
      this.alphabeticalSoldTickets = false;
      this.alphabeticalAvailableTickets = false;
    } else {
      this.currentShows.sort((first, second) => 0 - (first.auditorium.number > second.auditorium.number ? 1 : -1));
      this.alphabeticalAuditorium = false;
    }
  }
  public handleClickAvailableTickets() {
    if(this.alphabeticalAvailableTickets == false){
      this.currentShows.sort((first, second) => 0 - (first.availableTickets > second.availableTickets ? -1 : 1));
      this.alphabeticalAvailableTickets = true;
      this.alphabeticalDate = false;
      this.alphabeticalAuditorium = false;
      this.alphabeticalMovie = false;
      this.alphabeticalSoldTickets = false;
    } else {
      this.currentShows.sort((first, second) => 0 - (first.availableTickets > second.availableTickets ? 1 : -1));
      this.alphabeticalAvailableTickets = false;
    }
  }
  public handleClickSoldTickets() {
    if(this.alphabeticalSoldTickets == false){
      this.currentShows.sort((first, second) => 0 - (first.soldTickets > second.soldTickets ? -1 : 1));
      this.alphabeticalSoldTickets = true;
      this.alphabeticalDate = false;
      this.alphabeticalAuditorium = false;
      this.alphabeticalMovie = false;
      this.alphabeticalAvailableTickets = false;
    } else {
      this.currentShows.sort((first, second) => 0 - (first.soldTickets > second.soldTickets ? 1 : -1));
      this.alphabeticalSoldTickets = false;
    }
  }
}
