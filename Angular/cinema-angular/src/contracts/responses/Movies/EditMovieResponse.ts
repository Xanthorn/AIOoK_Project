import { ErrorResponse } from "../Common/ErrorResponse";

export class EditMovieResponse {

    constructor(public movieId: string, public errorResponse: ErrorResponse){
        
    }
}