import { Seat } from "./Seat";

export class Auditorium {

    constructor(public id: string, public number: number, public rows: number, public seatsInRow: number, public capacity: number, public seats: Seat[]){
        
    }
}