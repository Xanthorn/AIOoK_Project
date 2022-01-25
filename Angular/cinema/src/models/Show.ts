import { Auditorium } from "./Auditorium";
import { Movie } from "./Movie";
import { Seat } from "./Seat";

export class Show {
    id: string;
    date: Date;
    movie: Movie;
    auditorium: Auditorium;
    soldTickets: number;
    availableTickets: number;
    seats: Seat[];

    constructor() {
        this.id = '',
        this.date = new Date,
        this.movie = new Movie,
        this.auditorium = new Auditorium,
        this.soldTickets = 0,
        this.availableTickets = 0
        this.seats = [];
    }
}