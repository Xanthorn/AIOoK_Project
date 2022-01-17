import { ErrorResponse } from "../Common/ErrorResponse";

export class DeleteMovieResponse {

    constructor(public isDeleted: boolean, public errorResponse: ErrorResponse){
        
    }
}