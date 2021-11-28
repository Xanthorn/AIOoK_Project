import axios from "axios";

const url = "https://localhost:5001/api/v1/movies/"; // Change "localhost:44382" to your own api adress

export default class MoviesService {


    async getMovies() {
        
        try {
            const response = await axios.get(`${url}`);

            return response.data;
        }
        catch (e) {
            if(e.response !== undefined) {
                console.error(e.response.data);
            }
            return [];
        }
    }

}