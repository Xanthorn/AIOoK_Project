import { Show } from "src/classes/Show";
import { ErrorResponse } from "../Common/ErrorResponse";

export class GetShowByDateResponse {

    constructor(public show: Show, public errorResponse: ErrorResponse){
        
    }
}