import { Show } from "src/classes/Show";
import { ErrorResponse } from "../Common/ErrorResponse";

export interface GetShowByDateResponse {
    show: Show,
    errorResponse: ErrorResponse
}