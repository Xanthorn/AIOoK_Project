import { ErrorResponse } from "../Common/ErrorResponse";

export interface GetPopularityOfMovieByDateResponse {
    numberOfShows: number,
    sumOfTickets: number,
    availableTickets: number,
    soldTickets: number,
    errorResponse: ErrorResponse
}