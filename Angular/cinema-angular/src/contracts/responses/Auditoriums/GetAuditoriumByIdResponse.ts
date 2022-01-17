import { Auditorium } from "src/classes/Auditorium";
import { ErrorResponse } from "../Common/ErrorResponse";

export class GetAuditoriumByIdResponse {

    constructor(public auditorium: Auditorium, public errorResponse: ErrorResponse){
        
    }
}