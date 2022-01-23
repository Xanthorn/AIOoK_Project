import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Show } from 'src/models/Show';
import { ShowsService } from 'src/services/shows.service';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.css']
})
export class CalendarDayComponent implements OnInit {

  shows: Show[] = [];
  year?: number | null = 0;
  month?: number | null = 0;
  day?: number | null = 0;

  constructor(private showsService: ShowsService, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    this.year = Number(this.route.snapshot.paramMap.get('year'));
    this.month = Number(this.route.snapshot.paramMap.get('month'));
    this.day = Number(this.route.snapshot.paramMap.get('day'));

    if(this.year != null && this.month != null && this.day != null) {
    this.shows = await this.showsService.getShowsByDate(this.year, this.month, this.day);
    }
    console.log("Shows was fetched correctly");
  }

}
