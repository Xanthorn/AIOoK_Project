import { Show } from "src/classes/Show";
import { ErrorResponse } from "../Common/ErrorResponse";

export interface GetShowsResponse {
    shows: Show[], 
    errorResponse: ErrorResponse
}