import axios from "axios";

const url = "https://localhost:44382/api/v1/shows"; // Change "localhost:44382" to your own api adress

export default class ShowsService {





    async getShowsByDate(year, month, day) {
        try {
            let shows = [];

            const response = await axios.get(`${url}/${year}/${month}/${day}`);
            shows = response.data.shows;

            return shows;
        }
        catch (e) {
            console.error(e);
        }
    }

}