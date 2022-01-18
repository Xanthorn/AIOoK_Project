import { Auditorium } from "src/classes/Auditorium";
import { ErrorResponse } from "../Common/ErrorResponse";

export interface GetAuditoriumResponse {
    auditoriums: Auditorium[],
    errorResponse: ErrorResponse
}