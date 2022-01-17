import { Show } from "src/classes/Show";
import { ErrorResponse } from "../Common/ErrorResponse";

export class GetCurrentShowResponse {

    constructor(public shows: Show[], public errorResponse: ErrorResponse){
        
    }
}