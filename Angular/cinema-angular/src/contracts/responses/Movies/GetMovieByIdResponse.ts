import { Movie } from "src/classes/Movie";
import { ErrorResponse } from "../Common/ErrorResponse";

export interface GetMovieByIdResponse {
    movie: Movie,
    errorResponse: ErrorResponse
}