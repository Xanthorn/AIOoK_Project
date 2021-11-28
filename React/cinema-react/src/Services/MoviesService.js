import axios from "axios";
const url = "https://localhost:44382/api/v1/movies"; // Change "localhost:44382" to your own api adress

export default class MoviesService {
    async createMovie(title, hours, minutes) {
        try {
            const response = await axios.post(url, {
                title: title,
                durationHours: Number(hours),
                durationMinutes: Number(minutes),
            });
            console.log(`Movie ID: ${response.data}`);
        }
        catch (e) {
            if (e.response !== undefined) {
                console.error(e.response.data);
            }
        }
    }

    async getMovies() {
        try {
            const response = await axios.get(url);

            return response.data;
        }
        catch (e) {
            if (e.response !== undefined) {
                console.error(e.response.data);
            }
            return [];
        }
    }
}