import { Movie } from "src/classes/Movie";
import { ErrorResponse } from "../Common/ErrorResponse";

export class GetMovieResponse {

    constructor(public movies: Movie[], public errorResponse: ErrorResponse){
        
    }
}