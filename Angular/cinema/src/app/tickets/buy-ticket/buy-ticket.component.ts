import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuyTicketsRequest } from 'src/contracts/requests/Shows/BuyTicketsRequest';
import { Seat } from 'src/models/Seat';
import { Show } from 'src/models/Show';
import { ShowsService } from 'src/services/shows.service';

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css']
})
export class BuyTicketComponent implements OnInit {

  id?: string | null = '';
  show!: Show;
  choosenSeats: number[] = [];

  constructor(private showsService: ShowsService, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id !== null) {
      this.show = await this.showsService.getShowById(this.id);
    }
  }

  seatClicked(id: number) {
    if (this.choosenSeats.some(x => x === id)) {
      const index = this.choosenSeats.indexOf(id);
      if (index > -1) {
        this.choosenSeats.splice(index, 1);
      }
    }

    else {
      this.choosenSeats.push(id);
    }
  }

  async buyTickets() {
    let request: BuyTicketsRequest = {
      seatsId: []
    }

    for (let i = 0; i < this.choosenSeats.length; i++) {
      request.seatsId.push(this.show.seats[this.choosenSeats[i] - 1].id);
    }

    await this.showsService.buyTickets(this.show.id, request)
    window.location.reload();
  }

  counter(i: number) {
    return new Array(i);
  }
}
