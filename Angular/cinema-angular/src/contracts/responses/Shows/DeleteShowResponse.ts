import { ErrorResponse } from "../Common/ErrorResponse";

export class DeleteShowResponse {

    constructor(public showId: string, public errorResponse: ErrorResponse){
        
    }
}