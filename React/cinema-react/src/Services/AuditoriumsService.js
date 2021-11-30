import axios from "axios";

const url = "https://localhost:44382/api/v1/auditoriums"; // Change "localhost:44382" to your own api adress

export default class AuditoriumsService {
    async getAuditoriums() {
        try {
            const response = await axios.get(url);

            return response.data;
        }
        catch(e) {
            if(e.response !== undefined) {
                console.error(e.response.data);
            }
            return [];
        }
    }
}