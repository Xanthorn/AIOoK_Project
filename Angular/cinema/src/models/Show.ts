import { Auditorium } from "./Auditorium";
import { Movie } from "./Movie";

export class Show {
    id: string;
    date: Date;
    movie: Movie;
    auditorium: Auditorium;
    soldTickets: number;
    availableTickets: number;

    constructor() {
        this.id = '',
        this.date = new Date,
        this.movie = new Movie,
        this.auditorium = new Auditorium,
        this.soldTickets = 0,
        this.availableTickets = 0
    }
}