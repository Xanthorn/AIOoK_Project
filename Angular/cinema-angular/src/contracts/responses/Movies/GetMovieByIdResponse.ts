import { Movie } from "src/classes/Movie";
import { ErrorResponse } from "../Common/ErrorResponse";

export class GetMovieByIdResponse {

    constructor(public movie: Movie, public errorResponse: ErrorResponse){
        
    }
}