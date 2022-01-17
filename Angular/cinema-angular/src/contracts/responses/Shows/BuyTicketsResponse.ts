import { ErrorResponse } from "../Common/ErrorResponse";

export interface BuyTicketsResponse {
    seatsId: string[],
    errorResponse: ErrorResponse
}