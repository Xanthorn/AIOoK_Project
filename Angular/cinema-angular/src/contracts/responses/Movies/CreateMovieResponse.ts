import { ErrorResponse } from "../Common/ErrorResponse";

export interface CreateMovieResponse {
    movieId: string,
    errorResponse: ErrorResponse
}