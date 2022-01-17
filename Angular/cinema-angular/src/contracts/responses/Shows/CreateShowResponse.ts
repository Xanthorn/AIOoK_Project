import { ErrorResponse } from "../Common/ErrorResponse";

export class CreateShowResponse {

    constructor(public showId: string, public errorResponse: ErrorResponse){
        
    }
}