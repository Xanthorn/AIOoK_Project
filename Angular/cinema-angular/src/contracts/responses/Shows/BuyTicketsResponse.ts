import { ErrorResponse } from "../Common/ErrorResponse";

export class BuyTicketsResponse {

    constructor(public seatsId: string[], public errorResponse: ErrorResponse){
        
    }
}