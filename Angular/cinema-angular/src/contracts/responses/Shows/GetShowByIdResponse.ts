import { Show } from "src/classes/Show";
import { ErrorResponse } from "../Common/ErrorResponse";

export interface GetShowByIdResponse {
    shows: Show[],
    errorResponse: ErrorResponse
}