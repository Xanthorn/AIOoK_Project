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

  constructor(private showsService: ShowsService) { }

  async ngOnInit(): Promise<void> {
    this.shows = await this.showsService.getShows();
    console.log("Shows was fetched correctly");
  }
}
