import { ErrorResponse } from "../Common/ErrorResponse";

export class GetPopularityOfMovieByDateResponse {

    constructor(public numberOfShows: number, public sumOfTickets: number, public availableTickets: number, public soldTickets: number, public errorResponse: ErrorResponse){
        
    }
}