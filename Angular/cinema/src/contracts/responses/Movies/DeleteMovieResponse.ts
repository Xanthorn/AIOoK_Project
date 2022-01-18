import { ErrorResponse } from "../Common/ErrorResponse";

export interface DeleteMovieResponse {
    isDeleted: boolean,
    errorResponse: ErrorResponse
}