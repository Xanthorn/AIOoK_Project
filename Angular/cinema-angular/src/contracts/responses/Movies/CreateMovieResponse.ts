import { ErrorResponse } from "../Common/ErrorResponse";

export class CreateMovieResponse {

    constructor(public movieId: string, public errorResponse: ErrorResponse){
        
    }
}