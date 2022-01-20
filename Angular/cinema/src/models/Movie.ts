export class Movie {
    id: string;
    title: string;
    durationHours: number;
    durationMinutes: number;

    constructor() {
        this.id = '',
        this.title = '',
        this.durationHours = 0,
        this.durationMinutes = 0
    }
}