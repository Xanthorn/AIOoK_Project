import axios from "axios";

const url = "https://localhost:44382/api/v1/shows"; // Change "localhost:44382" to your own api adress

export default class ShowsService {
    async getShows() {
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

    async getShowsByDate(year, month, day) {
        try {
            const response = await axios.get(`${url}/${year}/${month}/${day}`);

            return response.data;
        }
        catch (e) {
            if (e.response !== undefined) {
                console.error(e.response.data);
            }
            return [];
        }
    }

    async createShow(date, movieId, auditoriumId) {
        try {
            const response = await axios.post(url, {
                date: date,
                movieId: movieId,
                auditoriumId: auditoriumId
            });
            console.log(`ID of added show: ${response.data}`);
        }
        catch (e) {
            if (e.response !== undefined) {
                console.error(e.response.data);
            }
        }
    }

    async deleteShow(id) {
        try {
            const response = await axios.delete(`${url}/${id}`);

            console.log(`ID of deleted show: ${response.data}`)
        }

        catch (e) {
            if (e.response !== undefined) {
                console.error(e.response.data);
            }
        }
    }
    async getCurrentShows() {
        try {
            const response = await axios.get(url + "/now");

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