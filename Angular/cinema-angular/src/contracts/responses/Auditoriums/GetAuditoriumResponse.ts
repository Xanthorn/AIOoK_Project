import { Auditorium } from "src/classes/Auditorium";
import { ErrorResponse } from "../Common/ErrorResponse";

export class GetAuditoriumResponse {

    constructor(public auditoriums: Auditorium[], public errorResponse: ErrorResponse){
        
    }
}