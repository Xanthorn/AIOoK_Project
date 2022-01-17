import { ErrorResponse } from "../Common/ErrorResponse";

export class EditShowResponse {

    constructor(public showId: string, public errorResponse: ErrorResponse){
        
    }
}