import { Show } from "src/classes/Show";
import { ErrorResponse } from "../Common/ErrorResponse";

export interface GetCurrentShowResponse {
    shows: Show[],
    errorResponse: ErrorResponse
}