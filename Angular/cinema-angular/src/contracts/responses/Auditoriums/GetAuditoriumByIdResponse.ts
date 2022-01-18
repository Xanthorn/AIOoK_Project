import { Auditorium } from "src/classes/Auditorium";
import { ErrorResponse } from "../Common/ErrorResponse";

export interface GetAuditoriumByIdResponse {
    auditorium: Auditorium,
    errorResponse: ErrorResponse
}