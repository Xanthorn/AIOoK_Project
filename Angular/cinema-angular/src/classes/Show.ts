import { Auditorium } from "./Auditorium";
import { Movie } from "./Movie";

export class Show {

    constructor(public id: string, public date: Date, public movie: Movie, public aduditorium: Auditorium, public soldTickets: number, public availableTickets: number, ){
        
    }
}