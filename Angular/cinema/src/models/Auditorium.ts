import { Seat } from "./Seat";

export class Auditorium {
    id: string;
    number: number;
    rows: number;
    seatsInRow: number; 
    capacity: number;
    seats: Seat[];

    constructor() {
        this.id = '',
        this.number = 0,
        this.rows = 0,
        this.seatsInRow = 0,
        this.capacity = 0,
        this.seats = []
    }
}