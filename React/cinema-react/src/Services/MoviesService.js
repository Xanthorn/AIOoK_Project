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

    async deleteMovie(id) {
        try {
            const response = await axios.delete(`${url}/${id}`);
            console.log(`Movie deleted: ${response.data}`);
        }
        catch (e) {
            if (e.response !== undefined) {
                console.error(e.response.data);
            }
        }
    }

    async editMovie(id, title, hours, minutes) {
        try {
            const response = await axios.put(`${url}/${id}`, {
                title: title,
                durationHours: Number(hours),
                durationMinutes: Number(minutes),
            });
            console.log(`Movie edited: ${response.data}`);
        }
        catch (e) {
            if (e.response !== undefined) {
                console.error(e.response.data);
            }
        }
    }

    async getMovieById(id) {
        try {
            const response = await axios.get(`${url}/${id}`);

            return response.data;
        }
        catch (e) {
            if (e.response !== undefined) {
                console.error(e.response.data);
            }
            return [];
        }
    }

    async getPopularityOfMovieByDate(id, year, month, day) {
        try {
            const response = await axios.get(`${url}/${id}/${year}/${month}/${day}`);

            return [response.data.numberOfShows, response.data.soldTickets, response.data.availableTickets];
        }
        catch (e) {
            if (e.response !== undefined) {
                console.error(e.response.data);
            }
            return [];
        }
    }
}