import { Movie } from "src/classes/Movie";
import { ErrorResponse } from "../Common/ErrorResponse";

export interface GetMovieResponse {
    movies: Movie[], 
    errorResponse: ErrorResponse
}